import { defineStore } from "pinia";
import type { Post } from "~/types/Post.js";
import data from "~/assets/courseData";

export const dataInit = defineStore({
  id: "dataInit",
  state: () => {
    return {
      localDataList: data,
    };
  },
  actions: {
    initLocalDataList(value: Post[]) {
      this.localDataList = value;
    },
    addLocalDataList(value: Post) {
      this.localDataList.push(value);
    },
    filterLocalDataList(value: number) {
      return this.localDataList.filter(
        (item: any) => item.id === value && item
      );
    },
    afterDeleteLocalDataList(value: number) {
      return this.localDataList.findIndex((item) => item.id === value);
    },
  },

  getters: {
    getLocalDataList: (state) => state.localDataList,
  },
});
