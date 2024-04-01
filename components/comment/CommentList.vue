<script setup lang="ts">
const { targetData } = defineProps<{ targetData: any }>();

const deleteTargetData = defineEmits<{
  (e: "update:target-data", idx: number): void;
}>();
</script>

<template>
  <div class="commet-list-wrap q-mt-xl q-pa-lg">
    <div
      v-for="(item, idx) in targetData.comments"
      :key="idx"
      class="row items-center justify-between q-pa-sm"
    >
      <p class="q-ma-none">{{ item }}</p>

      <q-btn
        label="삭제"
        size="xs"
        color="deep-orange-5"
        @click="deleteTargetData('update:target-data', idx)"
      />
    </div>
  </div>
</template>

<style scoped>
.commet-list-wrap {
  background-color: white;
  border-radius: 5px;
}
.commet-list-wrap > div {
  border: 1px solid rgb(228, 228, 228);
}
</style>
