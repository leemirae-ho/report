<script setup lang="ts">
const model = ref();
const imageUrl = ref("");

const SaveImage = () => {
  const url = window.URL.createObjectURL(
    new Blob([model.value], { type: "image/png" })
  );

  imageUrl.value = url;
};

const imageProps = defineProps<{ imageData: string }>();
const imageEmits = defineEmits(["update:imageData"]);
</script>

<template>
  <div class="input-image-wrap">
    <q-file color="purple-12" v-model="model" label="Label">
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>

    <img :src="imageUrl" class="show" />
    <q-btn
      class="btn-image"
      color="primary"
      label="저장"
      @click.stop="SaveImage"
      size="10px"
    />
  </div>
</template>

<style scoped>
.input-image-wrap {
  position: relative;
}

.input-image-wrap > .btn-image {
  position: absolute;
  top: 25%;
  right: 0;
}
</style>
