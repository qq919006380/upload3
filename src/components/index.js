import Upload3 from "./Upload.vue";

const components = {
  Upload3,
};

function install(Vue, data) {
  localStorage.setItem("token", data.token);
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};
