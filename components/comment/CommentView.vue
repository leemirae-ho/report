<script setup>
import InputComment from "./InputComment.vue";
</script>

<template>
  <div class="comment-wrap">
    <div class="comment-header">
      <p>댓글</p>
      <p>2 개</p>
    </div>
    <div class="comment-main">
      <InputComment />
    </div>
    <div class="comment-footer">
      <q-btn color="red" label="취소" size="sm" />
      <q-btn color="primary" label="저장" size="sm" />
    </div>
  </div>
</template>

<style scoped>
.comment-wrap {
  background-color: #e6e6e63f;
  padding: 30px;
  margin-top: 30px;
}

.comment-wrap > .comment-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.comment-wrap > .comment-main {
}

.comment-wrap > .comment-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
</style>
