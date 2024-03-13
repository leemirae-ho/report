<template>
  <div>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
//예를 들어 사용자가 admins or customer에 따라 다른 페이지를 보여주는 route
if (route.params.group === "admins" && !route.params.id) {
  console.log(route.params);
}
</script>

<style scoped></style>
