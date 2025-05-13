// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  compatibilityDate: '2024-12-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['/main.css','element-plus/dist/index.css',"ant-design-vue/dist/reset.css",],
  plugins:[
    {src:'~/plugins/echarts.ts',mode:'client'},
    {src:'~/plugins/ant-design.client.ts',mode:'client'},
    '~/plugins/gsap.ts',
  ]
})