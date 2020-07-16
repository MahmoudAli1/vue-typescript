<template>
  <div class="home">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { HelloWorld } })
export default class Home extends Vue {
  msg = "Welcome to Your Vue.js App";
}
</script>
