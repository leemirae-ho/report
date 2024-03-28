<script setup lang="ts">
const cancleBtnEmits = defineEmits<{
  (e: "update:cancle-btn", value: boolean): void;
}>();

const handleCancle = () => {
  cancleBtnEmits("update:cancle-btn", false);
};
</script>

<template>
  <q-btn color="red" label="취소" @click="handleCancle" />
</template>

<style scoped></style>
