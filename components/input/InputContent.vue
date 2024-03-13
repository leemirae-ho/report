<script setup lang="ts">
const contentProps = defineProps<{
  contentData: string;
}>();
const contentEmits = defineEmits<{
  (e: "update:contentData", value: string): void;
}>();

const content = computed({
  get() {
    return contentProps.contentData;
  },
  set(input: string) {
    return contentEmits("update:contentData", input);
  },
});
</script>

<template>
  <div class="q-md content-wrap" style="max-width: 300px">
    <textarea class="content-input" v-model="content" />
  </div>
</template>

<style scoped>
.content-input {
  width: 65vw;
  height: 50vh;
  background-color: aliceblue;
  resize: none;
  border: none;
}
</style>
