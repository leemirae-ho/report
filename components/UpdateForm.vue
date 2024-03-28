<script setup lang="ts">
const updateProps = defineProps<{
  updateTitle: string;
  updateEditor: string;
}>();

interface UpdateEmits {
  (event: "update:updateTitle", value: string): void;
  (event: "update:updateEditor", value: string): void;
}

const updateEmits = defineEmits<UpdateEmits>();

const editTitle = computed({
  get() {
    return updateProps.updateTitle;
  },
  set(title: string) {
    return updateEmits("update:updateTitle", title);
  },
});

const editContent = computed({
  get() {
    return updateProps.updateEditor;
  },
  set(content: string) {
    return updateEmits("update:updateEditor", content);
  },
});
</script>

<template>
  <ClientOnly>
    <div>
      <q-form no-submit class="form-wrap">
        <q-input v-model="editTitle" />
        <!-- <q-file color="purple-12" v-model="editImage" label="thumbnail">
        <template v-slot:prepend>
          <q-icon name="attach_file" /> 
        </template>
      </q-file>-->
        <div class="q-py-sm q-gutter-sm">
          <q-editor v-model="editContent" min-height="20rem" />
        </div>
      </q-form>
    </div>
  </ClientOnly>
</template>

<style scoped>
.text-area {
  width: 65vw;
  height: 50vh;
  background-color: aliceblue;
  resize: none;
  border: none;
  outline: none;
}
</style>
