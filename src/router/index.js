import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserDetails from "../views/UserDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   {
    path: "/users/:id",
    name: "UserDetails",
    component: UserDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
