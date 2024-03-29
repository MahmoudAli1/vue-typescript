import Vue from "vue";
import Vuex from "vuex";
import AuthModule, { authModuleName } from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [authModuleName]: AuthModule
  }
});
