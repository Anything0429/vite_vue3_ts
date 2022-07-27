/*
 * @Author: 郑建威 Zhengjw@zjcds.com
 * @Date: 2022-05-05 11:09:06
 * @LastEditors: 郑建威 Zhengjw@zjcds.com
 * @LastEditTime: 2022-05-05 11:10:13
 * @FilePath: \vue3-ts-practice\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~@': resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3001,
      open: false,
      https: false
    }
  }
})

