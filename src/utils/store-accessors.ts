import UtilsModule from "@/store/modules/utils";
import AuthModule from "@/store/modules/auth";
import { getModule } from "vuex-module-decorators";
import { Store } from "vuex";
import CarModule from "@/store/modules/car";
import ChatModule from "@/store/modules/chat";
import UserModule from "@/store/modules/user";

let utilsStore: UtilsModule;
let authStore: AuthModule;
let carStore: CarModule;
let chatStore: ChatModule;
let userStore: UserModule;

/**
 * if the store defined is manually registered or dynamic put them in the appropriate function
 */

function initialiseRegisteredStores(store: Store<any>): void {
  utilsStore = getModule(UtilsModule, store);
  carStore = getModule(CarModule, store);
  authStore = getModule(AuthModule, store);
}
function initialiseDynamicStores(store: Store<any>) {
  chatStore = getModule(ChatModule, store);
  userStore = getModule(UserModule, store);
}

export {
  initialiseDynamicStores,
  initialiseRegisteredStores,
  utilsStore,
  authStore,
  carStore,
  chatStore,
  userStore
};
