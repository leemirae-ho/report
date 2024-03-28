<script setup lang="ts">
defineEmits(["update:submitUpdate"]);
</script>

<template>
  <q-btn color="secondary" label="저장" @click="$emit('update:submitUpdate')" />
</template>

<style scoped></style>
