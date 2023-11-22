import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import PaperList from "../views/PaperList.vue";
import StudentList from "../views/StudentList.vue";
import PenList from "../views/PenList.vue";
import EditComponent from "../components/EditComponent.vue";
import AddItem from "../views/AddItem.vue";
import AboutView from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/About",
    name: "AboutView",
    component: AboutView,
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
  {
    path: "/AddItem",
    name: "AddItem",
    component: AddItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: "history",
});

export default router;
