<template>
  <div class="bg-gray-100 min-h-screen">
    <nav class="bg-blue-300 p-4 text-gray-800">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Koa 文档</h1>
        <a href="https://github.com/your-github-repo"
          class="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out" target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </nav>
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">Koa 使用文档</h1>

      <!-- 第一部分：介绍 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">1. 介绍</h2>
        <p class="text-gray-800">
          Koa 是一个现代的 Node.js 框架，用于构建 Web 应用程序和 API。本文档旨在介绍如何使用 Koa 来创建强大的应用程序。
        </p>
      </section>

      <!-- 第二部分：安装 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">2. 安装</h2>
        <p class="text-gray-800">
          在使用 Koa 之前，您需要安装它。可以使用以下命令来安装 Koa：
        </p>
        <pre class="bg-gray-200 p-4 rounded-lg text-sm mb-4">$ npm install koa</pre>
      </section>

      <!-- 第三部分：使用 Koa -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">3. 使用 Koa</h2>
        <p class="text-gray-800">
          使用 Koa 构建 Web 应用程序非常简单。您可以创建一个 Koa 应用程序并添加中间件来处理请求和响应。
        </p>
        <pre class="bg-gray-200 p-4 rounded-lg text-sm mb-4">$ const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

app.listen(3000);
        </pre>
      </section>

      <!-- 第四部分：进一步资源 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">4. 进一步资源</h2>
        <p class="text-gray-800">
          如果您需要更多关于 Koa 的信息，请参考以下资源：
        </p>
        <ul class="list-disc pl-6">
          <li><a href="https://koajs.com/"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Koa 官方网站</a></li>
          <li><a href="https://github.com/koajs/koa"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Koa GitHub 仓库</a></li>
          <li><a href="https://github.com/koajs/examples"
              class="text-blue-600 hover:text-blue-400 transition duration-300 ease-in-out">Koa 示例</a></li>
        </ul>
      </section>

      <!-- 第五部分：结束语 -->
      <section>
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">5. 结束语</h2>
        <p class="text-gray-800">
          Koa 是一个强大的 Node.js 框架，帮助您构建高性能的 Web 应用程序。祝您使用愉快！
        </p>
      </section>
    </div>
  </div>
</template>
<script setup>
</script>