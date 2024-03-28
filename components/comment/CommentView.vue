<script setup>
import InputComment from "./InputComment.vue";

const commentData = ref("");

const submitComment = () => {
  //localstorage에 comment가 없으면 일단 comment 빈 배열 넣어
  if (!localStorage.getItem("comment")) {
    localStorage.setItem("comment", "[]");
  }
  if (localStorage.getItem("comment")) {
    console.log("?");
  }
};
</script>

<template>
  <div class="comment-wrap">
    <div class="comment-header">
      <p>댓글</p>
      <p>{{ 1 }} 개</p>
    </div>
    <div class="comment-main">
      <InputComment v-model:commentData="commentData" />
    </div>
    <div class="comment-footer">
      <q-btn color="red" label="취소" size="sm" @click="commentData = ''" />
      <q-btn color="primary" label="저장" size="sm" @click="submitComment" />
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

.comment-wrap > .comment-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
</style>
