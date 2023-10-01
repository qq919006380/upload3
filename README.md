# upload3

## Introduction

一个基于 vue 的 web3 上传组件

## Installation

```bash
 yarn add upload3    # or  npm install upload3
```

## Usage
Import the component in your main.js:
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

Use the component in your App.vue:
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
Please note that the <YOUR_TOKEN> should be replaced with your actual token.





