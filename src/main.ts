import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import RenovationPluginFactory from "@/plugins/renovation";
import { initialiseRegisteredStores } from "@/utils/store-accessors";

Vue.config.productionTip = false;

initialiseRegisteredStores(store);

RenovationPluginFactory({
  backend: "frappe",
  hostURL: process.env.VUE_APP_BACKEND_URL!,
  clientId: process.env.VUE_APP_CLIENT_ID,
  disableLog: process.env.NODE_ENV === "production",
  useJWT: true
}).then(async ({ plugin, renovation }) => {
  Vue.use(plugin, { renovation });
  new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
  }).$mount("#app");
});
