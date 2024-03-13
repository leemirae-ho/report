<script setup lang="ts">
const { postProps } = defineProps<{ postProps: Object }>();
const dataStore = dataInit();

//새로 고침 했을 때 최신 데이터로 업데이트 하는 CourseCard 컴포넌트는 랜더링 되지 않으니까
// deleteBtn은 업데이트 되지 않은 데이터를 가져오게 되네
//그럼 store에서 localData 업데이트 하는 코드 짜고 싶은데
// store는 확장자가 ts라 훅을 못 써
//layout default에 넣어도 해결 안됨

console.log("업데이트 되나요?", dataStore.getLocalDataList);

const deleteClick = () => {
  console.log("working");
};
</script>

<template>
  <q-btn color="red" label="삭제" @click="deleteClick" />
</template>

<style scoped></style>
