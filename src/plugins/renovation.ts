import { Renovation } from "@leam-tech/renovation-core";
import { PluginObject } from "vue/types/plugin";
import { InitParams } from "@leam-tech/renovation-core/renovation";
import { setRenovationCoreInstance } from "@/utis/renovation-accessor";
import { FrappeRequestOptions } from "@leam-tech/renovation-core/utils/request";

const RenovationPlugin: PluginObject<{ renovation: Renovation }> = {
  async install(Vue, options) {
    /**
     * renovation injected into every component (this.$renovation)
     * unfortunately we wont have access to this in store hence the getRenovation() accessor
     */
    if (options?.renovation) Vue.prototype.$renovation = options.renovation;
    else
      throw new Error("Please pass renovation core instance to the plugin. ");
    /**
     * if we were to publish this as its own git repo we can move this function to the plugin & export it
     */
    setRenovationCoreInstance(options.renovation);
  }
};
const RenovationPluginFactory = (
  initParams: InitParams
): Promise<{
  plugin: PluginObject<{ renovation: Renovation }>;
  renovation: Renovation;
}> => {
  return new Promise<{
    plugin: PluginObject<{ renovation: Renovation }>;
    renovation: Renovation;
  }>(resolve => {
    const renovation = new Renovation();
    renovation.init(initParams);
    const localeFromStorage = localStorage.getItem("locale");
    const locale =
      localeFromStorage && localeFromStorage === "ar" ? "ar" : "en";
    const localeIso = localeFromStorage === "ar" ? "ar-AE" : "en-US";
    FrappeRequestOptions.headers["Accept-Language"] = [localeIso, locale];
    resolve({ plugin: RenovationPlugin, renovation });
  });
};

export default RenovationPluginFactory;

declare module "vue/types/vue" {
  interface Vue {
    $renovation: Renovation;
  }
}
