// plugins/gsap.ts
import { defineNuxtPlugin } from '#app'
import * as GSAP from 'gsap/all' // 确保导入所有模块

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('gsap', GSAP)
})