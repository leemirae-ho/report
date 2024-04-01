<script setup lang="ts">
import InputComment from "./InputComment.vue";

const { targetData } = defineProps<{ targetData: any }>();

const updateTargetData = defineEmits<{
  (e: "update:target-data"): void;
}>();

const setComments = ref(targetData.comments || null);

const commentData = ref("");
const route = useRoute();
const newData = ref();

const submitComment = () => {
  if (!commentData.value) {
    alert("댓글을 작성해주세요");
  } else if (!targetData.comments) {
    setLocalData([]);
  } else if (targetData.comments) {
    setLocalData(targetData.comments);
  }
};

const setLocalData = (data: any) => {
  newData.value = {
    id: Number(targetData.id),
    title: targetData.title,
    content: targetData.content,
    comments: data,
  };

  newData.value = addComment(newData.value);

  const localData = JSON.parse(localStorage.getItem("posts") as string);
  localData.splice(route.params.id, 1, newData.value);
  localStorage.setItem("posts", JSON.stringify(localData));

  updateTargetData("update:target-data");
  commentData.value = "";
  alert("댓글 작성을 완료하였습니다.");
};

const addComment = (data: any) => {
  data.comments.push(commentData.value!);
  return data;
};

const deleteComment = (idx: number) => {
  if (setComments.value) {
    setComments.value.splice(idx, 1);

    const newTargetData = {
      id: Number(targetData.id),
      title: targetData.title,
      content: targetData.content,
      comments: setComments,
    };

    const localData = JSON.parse(localStorage.getItem("posts") as string);

    localData.splice(route.params.id, 1, newTargetData);

    localStorage.setItem("posts", JSON.stringify(localData));

    alert("댓글을 삭제하였습니다.");
    const init = JSON.parse(localStorage.getItem("posts")!);

    setComments.value = init[Number(route.params.id)].value;
  }
};
</script>

<template>
  <div class="comment-wrap">
    <div class="comment-header">
      <p>댓글</p>
      <p>
        {{ targetData.comments ? targetData.comments.length : "0" }}
        개
      </p>
    </div>
    <div class="comment-main">
      <InputComment v-model:comment-data="commentData" />
    </div>
    <div class="comment-footer">
      <q-btn color="red" label="취소" size="sm" @click="commentData = ''" />
      <q-btn color="primary" label="저장" size="sm" @click="submitComment" />
    </div>
    <template v-if="targetData.comments">
      <CommentList
        :target-data="targetData"
        @update:target-data="deleteComment"
      />
    </template>
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
