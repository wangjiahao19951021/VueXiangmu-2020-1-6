    
module.exports = {
    // 端口等设置
    devServer: {
        // https: true,
        // host: 'localhost',
        // host: '192.168.1.6',
        host: '0.0.0.0', //可以在手机上访问
        port: 8080,
        // devServer: {
        // // 设置代理
        // proxy: {
        //   "/v1": {
        //   target: "http://127.0.0.1:8081/", // 域名
        //   ws: true, // 是否启用websockets
        //   changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //   pathRewrite: {
        //     "^/v1": "/"
        
        //   }
        //   }
        // }
        // }
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
    // // scss插件
    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'scss',
    //     patterns: []
    //   }
    // },
}