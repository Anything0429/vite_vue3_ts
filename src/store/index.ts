import { defineStore } from "pinia";
export const mainStore = defineStore('main', {
  state: () => ({
    msg: 'Hello world!',
    count: 0
  }),
  getters: {},
  actions: {
    changeCount(count: number) {
      this.count = count;
    }
  }
})