import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export const authModuleName = "auth";

export const AuthStatus = {
  loggedIn: "loggedIn",
  loggedOut: "loggedOut",
  error: "error",
  loading: "loading"
};

@Module({
  name: authModuleName,
  stateFactory: true,
  namespaced: true,
  preserveState: false
})
export default class AuthModule extends VuexModule {
  private _authStatus = AuthStatus.loggedOut;

  get getAuthStatus() {
    return this._authStatus;
  }

  @Action
  public login() {
    this.SET_AUTH_STATUS();
  }

  @Mutation
  private SET_AUTH_STATUS() {
    this._authStatus = AuthStatus.loggedIn;
  }
}
