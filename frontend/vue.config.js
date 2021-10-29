module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: '../backend/public',
}

// const path = require('path');

// module.exports = {
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 '@': path.join(__dirname, 'src/')
//             }
//         }
//     }
// }