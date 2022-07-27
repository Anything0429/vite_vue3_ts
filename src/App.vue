<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import {ref} from 'vue'

const myAddHandler = (msg: string):void => {
  console.log('新增=>', msg)
}
const myDelHandler = (msg: string):void => {
  console.log('删除=>', msg)
}
const myRef = ref()
const getInfoHandler = ():void => {
  const {sex, info}  = myRef.value
  console.log(sex)
  console.log(info)
}
</script>

<template>
  <HelloWorld ref="myRef" @my-add="myAddHandler" @my-del="myDelHandler" />
  <button @click="getInfoHandler">获取子组件中的数据2</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
