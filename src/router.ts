import { createWebHistory, createRouter } from "vue-router";
import Register from "./components/Register.vue";
import Steps from "./components/Steps.vue";

const routes = [
  { path: "/", component: Register },
  { path: "/code", component: Steps },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
