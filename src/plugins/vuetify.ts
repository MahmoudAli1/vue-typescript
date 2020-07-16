import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#76BBED",
        secondary: "#10629B",
        accent: "#2F92D8",
        error: "#F21313",
        info: "#CD6632",
        success: "#3DC33D",
        warning: "#FFC107"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
