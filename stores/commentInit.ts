export const commitInit = defineStore({
  id: "commentInit",
  state: () => {
    return {
      localCommentList: [],
    };
  },
  actions: {
    //NOTE 일단 any
    initLocalCommentList(value: any) {
      this.localCommentList = value;
    },
  },

  getters: {
    getLocalCommentList: (state) => state.localCommentList,
  },
});

// [
//   {
//     id: 0,
//     comments: ["첫 번째 댓글", "두 번째 댓글", "세 번째 댓글"],
//   },
//   {
//     id: 1,
//     comments: ["첫 번째 댓글", "두 번째 댓글", "세 번째 댓글"],
//   },
//   {
//     id: 2,
//     comments: ["첫 번째 댓글", "두 번째 댓글", "세 번째 댓글"],
//   },
// ];
