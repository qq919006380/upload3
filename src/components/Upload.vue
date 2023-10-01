<template>
  <div style="text-align: center; margin-bottom: 2rem;">
    <input type="file" @change="handleFileChange" ref="fileInputRef" style="display: none;" />
    <button @click="openFileInput"
      style="background-color: #3490dc; color: #fff; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">
      {{ buttonText }}
      <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1696162287811"
        class="icon animate-spin inline-block align-middle" viewBox="0 0 1024 1024" version="1.1" p-id="3719" width="20"
        height="20">
        <path
          d="M512 74.666667c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V106.666667c0-17.066667-14.933333-32-32-32zM693.333333 362.666667c8.533333 0 17.066667-2.133333 23.466667-8.533334l104.533333-104.533333c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 4.266667 6.4 12.8 8.533333 21.333333 8.533334zM917.333333 480h-149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM714.666667 669.866667c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333zM512 736c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-149.333333c0-17.066667-14.933333-32-32-32zM309.333333 669.866667l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l104.533334-104.533333c12.8-12.8 12.8-32 0-44.8s-36.266667-12.8-46.933334 0zM288 512c0-17.066667-14.933333-32-32-32H106.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32zM247.466667 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333z"
          fill="#666666" p-id="3720" />
      </svg>
    </button>
    <div v-if="file && showPreview" style="text-align: left; margin-top: 1rem;">
      <h3 style="font-size: 1.25rem; font-weight: bold;">文件预览:</h3>
      <img v-if="isImage" :src="filePreview" alt="File Preview"
        style="max-width: 100%; max-height: 300px; margin-top: 0.5rem;" />
      <p v-else style="margin-top: 0.5rem;">{{ file.name }}</p>
    </div>
  </div>
</template>

<script setup  >
import { createNFTStorageConnector } from '../lib/connect.ts';
import { ref, computed, defineEmits } from 'vue';

const emit = defineEmits(['on-success', 'on-error']);

const fileInputRef = ref(null);
const file = ref(null);
const buttonText = 'select file';
const showPreview = true;
let loading = ref(false)

const openFileInput = () => {
  fileInputRef.value.click();
};

const handleFileChange = () => {
  const selectedFile = fileInputRef.value.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    uploadIpfs(selectedFile);
  }
};

const isImage = computed(() => {
  if (file.value) {
    const fileType = file.value.type.toLowerCase();
    return fileType.startsWith('image/');
  }
  return false;
});

const filePreview = computed(() => {
  if (file.value && isImage.value) {
    return URL.createObjectURL(file.value);
  }
  return null;
});
const token = localStorage.getItem('token')
const connector = createNFTStorageConnector({ token });

const uploadIpfs = async (file) => {
  loading.value = true
  const type = file.type;
  const imageData = new Blob([file], { type: type });
  try {
    const result = await connector.postImage({ data: imageData, type });
    if (result) {
      emit('on-success', result); // 触发上传成功事件
    }
  } catch (error) {
    emit('on-error', error); // 触发上传失败事件
  }
  loading.value = false
};
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>
