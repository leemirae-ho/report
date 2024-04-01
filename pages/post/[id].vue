<script setup lang="ts">
import CancelBtn from "~/components/AsyncButton/CancleBtn.vue";
import DeleteBtn from "~/components/AsyncButton/DeleteBtn.vue";
import UpdateBtn from "~/components/AsyncButton/UpdateBtn.vue";
import UploadBtn from "~/components/AsyncButton/UploadBtn.vue";
import ViewComment from "~/components/comment/ViewComment.vue";
import type { Post } from "~/types/Post";

const store = dataInit();
const route = useRoute();

const posts = computed(() => store.getLocalDataList);
const targetData = ref();

// const updateImage = ref();

const updateTitle = ref("");
const updateEditor = ref("");

onMounted(() => {
  targetData.value = posts.value.find(
    (item: Post) => item.id === Number(route.params.id)
  );

  updateTitle.value = targetData.value?.title;
  updateEditor.value = targetData.value?.content;
  if (!localStorage.getItem("posts")) {
    const init = store.localDataList;

    window.localStorage.setItem("posts", JSON.stringify(init));
  } else {
    store.initLocalDataList(JSON.parse(window.localStorage.getItem("posts")!));
  }
});

const reRendering = () => {
  store.initLocalDataList(JSON.parse(window.localStorage.getItem("posts")!));

  targetData.value = posts.value.find(
    (item: Post) => item.id === Number(route.params.id)
  );
};

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
    <ClientOnly>
      <ViewComment
        v-if="!updateToggle"
        :target-data="targetData"
        @update:target-data="reRendering"
      />
    </ClientOnly>
  </div>
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
