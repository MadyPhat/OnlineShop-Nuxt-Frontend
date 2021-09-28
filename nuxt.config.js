export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Online Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Online Shop' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/prettyPhoto.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/main.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/responsive.css' },
    ],
    script: [
      { src: '/js/jquery.js', type: 'text/javascript' },
      { src: '/js/bootstrap.min.js', type: 'text/javascript' },
      { src: '/js/jquery.scrollUp.min.js', type: 'text/javascript' },
      { src: '/js/jquery.prettyPhoto.js', type: 'text/javascript' },
      { src: '/js/main.js', type: 'text/javascript' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://localhost:8000/'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    }
  },
  srcDir: __dirname,
  buildDir: '.nuxt/frontend',

  env: {
    PAYPAL_CLIENT_ID: "AUuH8WslXfXRrv9bh-OwtJuoJy3OC_gcwXu0YQ24bIVbcz464e5h1V9KG7yQevAe4kn7Eo4fx3FBbZXE"   // add your client ID that you created in the previous step
  }
}