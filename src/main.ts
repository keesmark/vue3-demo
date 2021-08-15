import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import {CountState} from "./store";

const app = createApp(App);
app.use(router)
    .provide('storeCount', CountState)
    .mount('#app')

