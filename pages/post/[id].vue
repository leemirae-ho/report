<script setup lang="ts">
import FormComment from "~/components/comment/CommentView.vue";
import CancelBtn from "~/components/AsyncButton/CancleBtn.vue";
import DeleteBtn from "~/components/AsyncButton/DeleteBtn.vue";
import UpdateBtn from "~/components/AsyncButton/UpdateBtn.vue";
import UploadBtn from "~/components/AsyncButton/UploadBtn.vue";
import type { Post } from "~/types/Post";
import UpdateContent from "~/components/input/UpdateContent.vue";

const store = dataInit();
const route = useRoute();

onMounted(() => {
  if (!localStorage.getItem("posts")) {
    const init = store.localDataList;

    window.localStorage.setItem("posts", JSON.stringify(init));
  } else {
    store.initLocalDataList(JSON.parse(window.localStorage.getItem("posts")!));
  }
});

const posts = computed(() => store.getLocalDataList);

const targetData = posts.value.find(
  (item: Post) => item.id === Number(route.params.id)
);

const updateTitle = ref(targetData!.title);

// const updateImage = ref();
const updateEditor = ref(targetData!.content);

const updateToggle = ref(false);

const handleToggle = (value: boolean) => {
  updateToggle.value = value;
};

const submitUpdate = () => {
  const newData = JSON.parse(localStorage.getItem("posts") as string);
  newData.splice(route.params.id, 1, {
    id: Number(route.params.id),
    title: updateTitle.value,
    content: updateEditor.value,
  });

  window.localStorage.setItem("posts", JSON.stringify(newData));
  alert("게시글을 수정 하였습니다.");
  navigateTo("/");
};
</script>

<template>
  <ClientOnly>
    <div class="detail-wrap">
      <Detail v-if="!updateToggle" :target-data="targetData" />
      <UpdateForm
        v-if="updateToggle"
        v-model:update-title="updateTitle"
        v-model:update-editor="updateEditor"
      />
      <div class="btn-wrap">
        <DeleteBtn v-if="!updateToggle" :target-data="targetData" />
        <UpdateBtn v-if="!updateToggle" @update:update-btn="handleToggle" />

        <CancelBtn v-if="updateToggle" @update:cancle-btn="handleToggle" />

        <UploadBtn v-if="updateToggle" @update:submitUpdate="submitUpdate" />
      </div>

      <FormComment v-if="!updateToggle" />
    </div>
  </ClientOnly>
</template>

<style scoped>
.detail-wrap > .btn-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.detail-wrap > .btn-wrap > button:last-child {
  margin-left: 10px;
}
</style>
