import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginVue.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import("../views/CadastroView.vue"),
  },
  {
    path: "/painel",
    name: "painel",
    component: () => import("../views/PainelView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
