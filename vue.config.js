const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //打包配置文件
  publicPath:  './',// 基本路径
  outputDir: "dist", // 输出文件目录
  assetsDir: "./assets", //放置生成的静态文件目录（js css img）
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件

  configureWebpack: {
    performance: {
      hints: "warning", // 警告 webpack 的性能提示
      maxEntrypointSize: 50000000, // 入口起点的最大体积
      maxAssetSize: 30000000, // 生成文件的最大体积
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  }, //修改favicon.ico
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  }
})
