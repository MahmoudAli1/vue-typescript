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
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  title = "My first component";
}
</script>
