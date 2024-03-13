<script setup lang="ts">
import { computed } from "vue";

const titleProps = defineProps<{
  titleData: string;
}>();

const titleEmits = defineEmits<{
  (e: "update:titleData", value: string): void;
}>();

const title = computed({
  get() {
    return titleProps.titleData;
  },
  set(input: string) {
    return titleEmits("update:titleData", input);
  },
});
</script>

<template>
  <q-input v-model="title" placeholder="제목을 작성해주세요." />
</template>

<style scoped></style>
