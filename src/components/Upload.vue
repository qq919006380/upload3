<template>
  <div style="text-align: center; margin-bottom: 2rem;">
    <input type="file" @change="handleFileChange" ref="fileInputRef" style="display: none;" />
    <button @click="openFileInput"
      style="background-color: #3490dc; color: #fff; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">
      {{ buttonText }}
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

const { emit } = defineEmits();

const fileInputRef = ref(null);
const file = ref(null);
const buttonText = 'select file';
const showPreview = true;

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
  const type = file.type;
  const imageData = new Blob([file], { type: type });
  try {
    const result = await connector.postImage({ data: imageData, type });
    if (result) {
      console.log('上传成功', result);
      emit('on-success', result); // 触发上传成功事件
    }
  } catch (error) {
    console.error('上传失败', error);
    emit('on-error', error); // 触发上传失败事件
  }
};
</script>

<style scoped></style>
../lib/connect.js