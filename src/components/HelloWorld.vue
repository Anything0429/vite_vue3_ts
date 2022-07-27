<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { mainStore } from '@/store'
withDefaults(
  defineProps<{ 
    msg?: string 
  }>(),
  {
    msg: 'Test'
  }
)

const store = mainStore()
console.log(store)
// const { msg: storeMsg, count } = storeToRefs(store)

let sex = ref<string>('男')
let info = reactive<{like: string, age: number}>({
  like: 'speak',
  age: 27
})
const {like, age} = toRefs(info)

const stateStyle = reactive({
  color: 'red'
})

const myEmits = defineEmits(['myAdd', 'myDel'])
const handleAddClick = ():void => {
  myEmits('myAdd', '新增数据')
}
const handleDelClick = ():void => {
  myEmits('myDel', '删除数据')
}
const handleChangeStore = ():void => {
  console.log(store)
  store.changeCount(10)
  // store.$patch({
  //   count: store.count + 2,
  //   msg: store.msg === 'Hello world!' ? 'Hello world' : 'Hello world!'
  // })
}

const handleChangeInfo = ():void => {
  info.like = info.like === 'speak' ? 'read' : 'speak'
  info.age = info.age + 1
}

defineExpose({
  sex,
  info
})
</script>

<template>
  <h1 class="title">{{ msg }}</h1>
  <button @click="handleAddClick">新增</button>
  <button @click="handleDelClick">删除</button>
  <h2>Store.msg: {{ store.msg }}, Store.count: {{ store.count }}</h2>
  <button @click="handleChangeStore">修改Store数据</button>
  <h2>Info.like: {{like}}, Info.age: {{age}}</h2>
  <button @click="handleChangeInfo">修改Info数据</button>
</template>

<style scoped>
.title {
  color: v-bind('stateStyle.color')
}
</style>
