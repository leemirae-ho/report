<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: "1000px",
  margin: "0 auto",
}));
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>공통 UI</q-toolbar-title>
        <q-separator dark vertical />
        <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="List" to="/list" />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
