import { defineStore } from "pinia";
import type { Course } from "~/types/index.js";
import data from "~/assets/courseData";

export const dataInit = defineStore({
  id: "dataInit",
  state: () => {
    return {
      localDataList: data,
    };
  },
  actions: {
    initLocalDataList(value: any) {
      this.localDataList = value;
    },
    addLocalDataList(value: Course) {
      this.localDataList.push(value);
    },
    filterLocalDataList(value: number) {
      return this.localDataList.filter(
        (item: any) => item.id === value && item
      );
    },
  },

  getters: {
    getLocalDataList: (state) => state.localDataList,
  },
});
