<script setup>
import { FormBuilder } from "@formio/vue";
</script>

<template>
  <div>
    <FormBuilder
      v-bind:form="{ display: 'form' }"
      v-bind:options="{}"
    ></FormBuilder>
  </div>
</template>

<style></style>
