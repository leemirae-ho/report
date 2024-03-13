<script setup lang="ts">
import { dataInit } from "../stores/dataInit";
const store = dataInit();
const path = ref();
const current = ref(1);
const pagenateMax = ref(0);

const handleCardClick = (index: number) => {
  path.value = `/post/${index}`;
};

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

//maxValue는 pagenate의 max 값을 반환함
const maxValue = () => {
  console.log(newPost.value.length);
  return Math.ceil(newPost.value.length / 8);
};
</script>

<template>
  <div class="page-wrap">
    <q-page>
      <div class="text-center q-mt-lg">
        <div class="text-h4">All Courses</div>
        <p class="q-mt-sm text-grey-8">당신의 기록을 남겨주세요!</p>
      </div>
      <div class="row q-col-gutter-lg item-wrap">
        <nuxt-link :to="path">
          <CourseCard :current="current" @click="handleCardClick" />
        </nuxt-link>
      </div>
    </q-page>

    <q-pagination
      v-model="current"
      class="pagenate q-mt-lg"
      :max="pagenateMax"
      direction-links
      unelevated
      color="black"
      active-color="purple"
      @click.capture="current = Number($event.target.innerText)"
    />
  </div>
</template>

<style scoped>
.page-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.item-wrap > a {
  text-decoration: none;
  color: inherit;
}

.item-wrap > a > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-startrt;
  align-items: center;
  padding: 0;
}
</style>
