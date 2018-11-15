module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/main.css',
        '~assets/font-awesome/css/font-awesome.min.css'
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios','js-cookie','i18n'],
        /*
        ** Run ESLINT on save
        */
        /*extend (config, ctx) {
          if (ctx.isDev && ctx.isClient) {
            config.module.rules.push({
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /(node_modules)/
            })
          }
        }*/
        extend(config) {
            if (process.server && process.browser) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    serverMiddleware: [
        // API middleware
        '~/api/index.js'
    ],
    plugins: [
        {src: '~plugins/iview', ssr: true},
        '~plugins/i18n',
        '~plugins/moment',
        '~plugins/validation'
        /*{src: '~plugins/axios', ssr: true}*/
    ],
    router: {
        middleware: ['i18n','browser','stats']
    }
}
