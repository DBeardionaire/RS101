module.exports = {
  analyze: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'realtyschool101',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Realty School 101' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rs101-icon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Babel - TODO: For importing only used components
    */
    // babel: {
    //   'presets': ['vue-app'],
    //   'plugins': [
    //     ['component', [{
    //       'libraryName': 'element-ui',
    //       'styleLibraryName': 'theme-default'
    //     }]]
    //   ],
    //   'comments': false
    // },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // Vendor
    // vendor: ['element-ui']
  },
  // Add element-ui in our app, see plugins/element-ui.js file
  plugins: ['@/plugins/element-ui'],
  //css
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ]
}

