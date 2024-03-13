<script setup lang="ts">
const text = ref("");
const dense = ref(false);
</script>

<template>
  <q-input v-model="text" filled :dense="dense" />
</template>

<style scoped></style>
