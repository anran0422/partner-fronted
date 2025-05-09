import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/route.ts";
import Vant from 'vant';

const app = createApp(App);

// 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(), // 哈希路由：比较容易实现# 的方式增加页面
    routes, // `routes: routes` 的缩写
})

app.use(router);
app.use(Vant);

app.mount('#app');



