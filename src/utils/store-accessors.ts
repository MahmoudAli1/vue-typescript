import AuthModule from "@/store/modules/auth";
import { getModule } from "vuex-module-decorators";
import { Store } from "vuex";

let authStore: AuthModule;

function initialiseRegisteredStores(store: Store<any>): void {
  authStore = getModule(AuthModule, store);
}

export { authStore, initialiseRegisteredStores };
