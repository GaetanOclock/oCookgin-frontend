import { createApp} from "vue";
import 'reset-css';
import App from "./App.vue";
import {createRouter, createWebHistory} from 'vue-router';

import HomeView from './views/HomeView.vue';
import RegisterView from './views/RegisterView.vue';

const routes = [
    {path: '/', component: HomeView},
    {path: '/register', component: RegisterView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);
app.mount("#app");