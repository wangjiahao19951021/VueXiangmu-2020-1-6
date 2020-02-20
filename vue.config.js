
module.exports = {
    //阻止下eslint,否则项目中swiper会出错
    lintOnSave: false,
        publicPath: "./",
        outputDir: "dist",
        assetsDir:"static",
        indexPath:'index.html',
    // 端口等设置
    devServer: {
        // https: true,
        // host: 'localhost',
        // host: '192.168.1.6',
        host: '0.0.0.0', //可以在手机上访问
        port: 8080,
        // 开启代理
        // proxy: {
        //   //https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9305437
        //   "mz": {
        //     target: 'https://m.maizuo.com/',
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //       //在真正的目标url里会将暗号处理掉  
        //       '^/mz': ''
        //     }
        //   },
        // }

    },
    
}