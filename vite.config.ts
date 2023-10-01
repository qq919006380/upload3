import vue from '@vitejs/plugin-vue'
export default ({ command, mode }) => {
  let buildMap = {
    lib: {
      lib: {
        entry: './src/components/index.js', // 指定入口文件的路径
        name: 'my-component-library', // 打包后的库名称
      },
      outDir: 'lib',
    },
    docs:{
      outDir: 'docs',
    }
  }
  const config = {
    plugins: [vue()],
    build: buildMap[mode]
  };
  return config
};

