<script setup lang="ts">
const dataStore = dataInit();

//  onMounted(() => {
//   if (!localStorage.getItem("posts")) {
//     const init = dataStore.localDataList;

//     window.localStorage.setItem("posts", JSON.stringify(init));
//   } else {
//     dataStore.initLocalDataList(
//       JSON.parse(window.localStorage.getItem("posts")!)
//     );
//   }
// });

const newData = computed(() => dataStore.getLocalDataList);
</script>

<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">게시글 목록</div>
      <div v-for="(item, index) in newData" :key="index" class="list-wrap">
        <p class="q-mt-sm text-grey-8">
          {{ item.title }}
          <span class="list"> {{ item.content }} </span>
        </p>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.text-center {
  border: 1px solid red;
}

.text-center > .list-wrap {
  background: black;
}

/* .text-center >.list-wrap >  */
</style>
