<script setup lang="ts">
import { dataInit } from "../stores/dataInit";

const titleData = ref("");
const contentData = ref("");
const imageData = ref("");
const store = dataInit();
const { fullPath } = useRoute();

const pathCheck = () => {
  const str = fullPath.indexOf("/");
  return fullPath.slice(str + 1, fullPath.length);
};

const submit = () => {
  const idValue = store.getLocalDataList.length;

  store.addLocalDataList({
    id: idValue,
    title: titleData.value,
    content: contentData.value,
  });

  const init = store.localDataList;
  window.localStorage.setItem("posts", JSON.stringify(init));
};
</script>

<template>
  <q-form no-submit class="form-wrap">
    <InputTitle v-model:titleData="titleData" />
    <InputImage v-model:imageData="imageData" />
    <InputContent v-model:contentData="contentData" />

    <q-btn
      v-if="pathCheck() === 'newpost'"
      color="primary"
      label="업로드"
      @click="submit"
    />
  </q-form>
</template>

<style scoped>
.form-wrap {
  margin-top: 20px;
}
</style>
