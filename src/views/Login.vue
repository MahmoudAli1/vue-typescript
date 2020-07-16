<template>
  <v-container>
    <v-row>
      <v-col>
        {{ title }}
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  title = "My Login Page";
}
</script>
