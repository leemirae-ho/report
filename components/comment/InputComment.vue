<script setup lang="ts">
const commentProps = defineProps<{
  commentData: string;
}>();

const commentsEmits = defineEmits<{
  (e: "update:comment-data", value: string): void;
}>();

const comment = computed({
  get() {
    return commentProps.commentData;
  },
  set(input: string) {
    return commentsEmits("update:comment-data", input);
  },
});
</script>

<template>
  <q-input
    v-model="comment"
    outlined
    class="bg-white"
    placeholder="댓글을 작성해주세요."
  />
</template>

<style scoped></style>
