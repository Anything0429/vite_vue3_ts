<!--
 * @Author: 郑建威 Zhengjw@zjcds.com
 * @Date: 2022-05-05 11:09:06
 * @LastEditors: 郑建威 Zhengjw@zjcds.com
 * @LastEditTime: 2022-05-05 11:22:43
 * @FilePath: \vue3-ts-practice\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: 郑建威 Zhengjw@zjcds.com
 * @Date: 2022-05-05 11:09:06
 * @LastEditors: 郑建威 Zhengjw@zjcds.com
 * @LastEditTime: 2022-05-05 11:17:09
 * @FilePath: \vue3-ts-practice\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
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
  <button @click="getInfoHandler">获取子组件中的数据1</button>
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
