# upload3

## 介绍

一个基于 vue 的 web3 上传组件

## 安装

```bash
 yarn add upload3    # or  npm install upload3
```

## 使用

main.js 引入组件

```js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Upload3 from "./components/index";

let app = createApp(App);
app.use(Upload3, {
  token: "<YOUR_TOKEN>",
});
app.mount("#app");
```

App.vue 使用组件

```vue
<template>
  <upload3></upload3>
</template>
```

script

```js
<script setup>
import { ref } from 'vue';
let data = ref("null")
let handleSuccess = (result) => {
  console.log(result);
}
let handleError = (error) => {
  console.error(error);
}

</script>
```
