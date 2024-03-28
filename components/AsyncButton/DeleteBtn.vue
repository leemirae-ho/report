<script setup lang="ts">
const { targetData } = defineProps<{ targetData: any }>();
const dataStore = dataInit();

onMounted(() => {
  if (!localStorage.getItem("posts")) {
    const init = dataStore.localDataList;

    window.localStorage.setItem("posts", JSON.stringify(init));
  } else {
    dataStore.initLocalDataList(
      JSON.parse(window.localStorage.getItem("posts")!)
    );
  }
});
const newPost = computed(() => dataStore.getLocalDataList);

const handleDelete = () => {
  const targetId = targetData.id;
  const deleteId = dataStore.afterDeleteLocalDataList(targetId);

  newPost.value.splice(deleteId, 1);
  dataStore.initLocalDataList(newPost.value);

  window.localStorage.setItem("posts", JSON.stringify(newPost.value));
  alert("게시글이 삭제 되었습니다.");
};
</script>

<template>
  <nuxt-link to="/">
    <q-btn color="red" label="삭제" @click="handleDelete" />
  </nuxt-link>
</template>

<style scoped></style>
