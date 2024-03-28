<script setup lang="ts">
import { dataInit } from "../stores/dataInit";

const store = dataInit();

const titleData = ref("");
const imageData = ref("");
const Preview = ref(false);

const editor = ref("");

const submit = () => {
  const idValue = store.getLocalDataList.length;

  if (titleData.value && editor.value) {
    store.addLocalDataList({
      id: idValue,
      title: titleData.value,
      content: editor.value,
    });

    const update = store.getLocalDataList;

    window.localStorage.setItem("posts", JSON.stringify(update));
    store.initLocalDataList(JSON.parse(window.localStorage.getItem("posts")!));
    alert("게시글을 업로드 했습니다.");
    navigateTo("/");
  } else {
    alert("입력값을 전부 채우지 않았습니다.");
  }
};
</script>

<template>
  <div>
    <q-form no-submit class="form-wrap q-pt-lg">
      <InputTitle v-model:titleData="titleData" />
      <InputImage v-model:imageData="imageData" />
      <template v-if="!Preview">
        <div class="q-py-sm q-gutter-sm">
          <q-editor v-model="editor" min-height="20rem" />
        </div>
      </template>
      <template v-else-if="Preview">
        <div class="preview-box" v-html="editor"></div>
      </template>

      <q-btn color="primary" label="업로드" @click="submit" />

      <q-btn
        class="q-ml-sm"
        color="orange"
        label="미리보기"
        @click="Preview = !Preview"
      />
    </q-form>
  </div>
</template>

<style scoped>
.preview-box {
  min-height: 22rem;
  border: 1px solid rgb(204, 204, 204);
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
