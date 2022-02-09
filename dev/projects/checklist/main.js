import { createApp }    from "Vue";
import VueFormGenerator from "../../../src";
import App              from "./app.vue";

const app = createApp(App);

app.use(VueFormGenerator).mount("#app");
