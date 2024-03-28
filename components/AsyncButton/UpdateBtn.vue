<script setup lang="ts">
const updateBtnEmits = defineEmits<{
  (e: "update:update-btn", value: boolean): void;
}>();

const handleUpdate = () => {
  updateBtnEmits("update:update-btn", true);
};
</script>

<template>
  <q-btn color="secondary" label="수정" @click="handleUpdate" />
</template>

<style scoped></style>
