import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//控制console.log输出
// const isDev = process.env.NODE_ENV !== 'production';
// window.console.log = isDev ? console.log.bind(console) : () => {};

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
