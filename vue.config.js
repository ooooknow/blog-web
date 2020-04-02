'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
function resolve(dir) {
    return path.join(__dirname, dir);
}

// 代理请求地址
const APIURL = 'http://admin.lf.workair.cn/api/';
module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/variables.scss";
              `,
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
    },
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            '/proxy-api': {
                target: APIURL,
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/proxy-api': '/',
                },
            },
        },
    },
    chainWebpack: config => {
        //修改文件引入自定义路径
        config.resolve.alias.set('@', resolve('src')).set('images', resolve('src/assets/images'));
    },
    lintOnSave: undefined,
};
