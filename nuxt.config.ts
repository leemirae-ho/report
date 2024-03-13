// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: ["nuxt-quasar-ui", "@pinia/nuxt"],
  quasar: {
    /* quasar 관련된 옵션 */
  },
});
