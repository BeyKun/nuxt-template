import {config} from './global.config'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'serdadu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: config.base + 'assets/vendor/element-ui/index.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }
    ],
    script: [
      {
        src: config.base + 'assets/vendor/jquery/dist/jquery.min.js'
      },
      {
        src: config.base + 'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
      },
      {
        src: config.base + 'assets/vendor/js-cookie/js.cookie.js'
      },
      {
        src: config.base + 'assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js'
      },
      {
        src: config.base + 'assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js'
      },
      {
        src: config.base + 'assets/vendor/chart.js/dist/Chart.min.js'
      },
      {
        src: config.base + 'assets/vendor/chart.js/dist/Chart.extension.js'
      },
      {
        src: config.base + 'assets/js/argon.min001.js'
      },
      // {
      //   src: 'https://cdn.trackjs.com/agent/v3/latest/t.js'
      // }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@static/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css',
    '@static/assets/vendor/nucleo/css/nucleo.css',
    '@static/assets/css/argon.min.css',
    '@static/assets/scss/jmli.scss'
  ],

  /*
  ** Customize the progress bar color
  */
 loading: {
    name: 'chasing-dots',
    color: '#E6A23C',
    background: 'white',
    height: '4px'
 },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@plugins/helper'},
    {src: '@plugins/editor', mode: 'client'},
    {src: '@plugins/vuesax'},
    { src: "@/plugins/chart", mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-element-ui',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/moment',
  ],

  module: {
    rules: [
        {
           test: /\.s[ac]ss$/i,
           use: ['style-loader','css-loader','sass-loader',],
         },
         {
          test: /\.css$/,
          loader: 'vue-style-loader!css-loader'
        }
    ],
  },

  loaders: {

    // ...

    // Css loader for Webpack 1.x .
    css: 'vue-style-loader!css-loader'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
