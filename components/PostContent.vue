<script setup lang="ts">
const { postProps } = defineProps<{ postProps: any }>();
</script>

<template>
  <div class="content-wrap">
    <p>{{ postProps.postContent }}</p>
  </div>
</template>

<style scoped>
.content-wrap {
  height: 50vh;
}
</style>
