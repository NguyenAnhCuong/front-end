import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import PaperList from "../views/PaperList.vue";
import StudentList from "../views/StudentList.vue";
import PenList from "../views/PenList.vue";
import EditComponent from "../components/EditComponent.vue";
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AddView.vue"),
  },
  {
    path: "/pen",
    name: "PenList",
    component: PenList,
  },
  {
    path: "/paper",
    name: "PaperList",
    component: PaperList,
  },
  {
    path: "/student",
    name: "StudentList",
    component: StudentList,
  },
  {
    path: "/EditComponent?id=:id",
    name: "EditComponent",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
