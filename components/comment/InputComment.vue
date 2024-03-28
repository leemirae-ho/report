<script setup lang="ts">
const commentProps = defineProps<{
  commentData: string;
}>();

const commentsEmits = defineEmits<{
  (e: "update:commentData", value: string): void;
}>();

const reply = computed({
  get() {
    return commentProps.commentData;
  },
  set(input: string) {
    return commentsEmits("update:commentData", input);
  },
});
</script>

<template>
  <q-input
    v-model="reply"
    outlined
    class="bg-white"
    placeholder="댓글을 작성해주세요."
  />
</template>

<style scoped></style>
