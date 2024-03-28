<script setup lang="ts">
import { dataInit } from "../stores/dataInit";

const store = dataInit();

const current = ref(1);
const pagenateMax = ref(0);

onMounted(() => {
  if (!localStorage.getItem("posts")) {
    const init = store.localDataList;

    window.localStorage.setItem("posts", JSON.stringify(init));
  } else {
    store.initLocalDataList(JSON.parse(window.localStorage.getItem("posts")!));
  }
  pagenateMax.value = maxValue();
});

const newPost = computed(() => store.getLocalDataList);

const maxValue = () => {
  return Math.ceil(newPost.value.length / 8);
};
</script>

<template>
  <div>
    <q-page>
      <div class="q-mt-lg text-center">
        <div class="text-h4">All Courses</div>
        <p class="q-mt-sm text-grey-8">당신의 기록을 남겨주세요!</p>
      </div>
      <div class="page-wrap">
        <CourseCard :current="current" :max="pagenateMax" />
      </div>
    </q-page>

    <q-pagination
      v-model="current"
      class="pagenate q-mt-lg justify-center"
      :max="pagenateMax"
      direction-links
      unelevated
      color="black"
      active-color="purple"
      @click.capture="current = Number($event.target.innerText)"
    />
  </div>
</template>

<style scoped></style>
