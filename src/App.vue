<template>
  <div class="bg-gray-100 min-h-screen">
    <nav class="bg-blue-300 p-4 text-gray-800">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold flex">
          <img class="mx-2" width="30" height="30" src="/upload.svg" alt="">
          <span>upload3</span>
        </h1>
        <a href="https://github.com/qq919006380/upload3"
          class="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out" target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </nav>
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">upload3 Documentation</h1>

      <!-- 第一部分：介绍 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">1. Introduction</h2>
        <p class="text-gray-800">
          A web3 upload component based on Vue.
        </p>
      </section>

      <!-- 第二部分：安装 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">2. Installation</h2>
        <p class="text-gray-800">
          Before using upload3, you need to install it. You can install upload3 using the following command:
        </p>
        <pre class="bg-gray-200 p-4 rounded-lg text-sm mb-4">$ yarn add upload3    # or  npm install upload3</pre>
      </section>

      <!-- 第三部分：使用 Koa -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">3. Usage</h2>
        <p class="text-gray-800">
          Import the component in your main.js:
        </p>
        <pre class="bg-gray-200 p-4 rounded-lg text-sm mb-4">
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Upload3 from "./components/index";

let app = createApp(App);
app.use(Upload3, {
  token: "&lt;/YOUR_TOKEN>",
});
app.mount("#app");
        </pre>
      </section>
      <p class="text-gray-800">
        preview
      </p>
      <section class="bg-gray-200 p-4 rounded-lg text-sm mb-4 flex">
        <div class="w-3/5">
          <upload3 @on-success="handleSuccess" @on-error="handleError"></upload3>
        </div>
        <div class="w-2/5">
          {{ data }}
        </div>
      </section>

      <!-- 第四部分：进一步资源 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">4. Additional Resources</h2>
        <p class="text-gray-800">
          If you need more information about IPFS, please refer to the following resources:
        </p>
        <ul class="list-disc pl-6">
          <li><a href="https://nft.storage/"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">nft.storage</a></li>
          <li><a href="https://docs.filecoin.io/"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Filecoin Docs</a></li>
          <li><a href="https://fvm.filecoin.io/"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out"> Filecoin Virtual Machine</a>
          </li>
        </ul>
      </section>

      <!-- 第五部分：结束语 -->
      <section>
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">5. Thank you for reading</h2>
        <p class="text-gray-800">
          Thank you for reading. We welcome contributions from the community! If you have suggestions, found issues, or
          would like to contribute code improvements, please feel free to:
        <ul class="list-disc pl-6">

          <li>
            <a href="https://github.com/qq919006380/upload3/issues" class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Open an Issue</a>
            to report a problem or suggest an enhancement.
          </li>

          <li>
            <a href="https://github.com/qq919006380/upload3/pulls" class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Create a Pull
              Request</a>
            to contribute code changes or fixes.
          </li>

        </ul>
        Your feedback and contributions are greatly appreciated!"

        </p>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let data = ref({
  "cid": "",
  "url": ""
})
let handleSuccess = (result) => {
  console.log(result);
  data.value = result
}
let handleError = (error) => {
  console.error(error);
}

</script>