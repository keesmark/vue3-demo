import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Form from "../components/Form.vue";

const routes = [
    {
        path: "/", component: HelloWorld
    },
    {
        path: "/form", component: Form
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router;
