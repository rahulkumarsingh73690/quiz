import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - quiz',
    title: 'quiz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyCG49vI6nrKb7KSL8CTHVdXwY5YXUwTrl8',
      authDomain: 'quiz-68c4e.firebaseapp.com',
      databaseURL: 'https://quiz-68c4e.firebaseio.com',
      projectId: 'quiz-68c4e',
      storageBucket: 'quiz-68c4e.appspot.com',
      messagingSenderId: '406134368861',
      appId: '1:406134368861:web:0440a01d7bbb0a668dfbb4',
      measurementId: 'G-EXMMDQSYFT',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken3, // #E53935
          secondary: colors.blue.darken2, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
          button: '#fff',
        },
        dark: {
          //here you will define primary secondary stuff for dark theme
          primary: '#000000',
          secondary: colors.grey.darken4,
        },
      },
      light: true,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
