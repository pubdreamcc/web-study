# 遇到的问题

平时我们在用 `Vue`开发项目的时候，生产环境部署打包后，会遇到打包后的文件体积过大，比如像 `vendor.js` 文件或者是 `app.js` 文件体积接近 `1M`，这时候就需要我们做一些优化了。

## 解决办法

### 通过CDN引入一些常用的固定库

假如我们项目中用到了 `element-ui`，`bootstrap`， `swiper`等第三方资源时，我们可以通过 CDN 加载资源，减少 webpack 打包后的体积。

方法：

这里介绍自己总结的方法，是自己经过试错后得到的结果，读者放心参考。

1. 在页面入口html文件 `index.html` 中引入 CDN 资源路径

```html
<!DOCTYPE html>
 2 <html>
 3   <head>
 4     <meta charset="utf-8">
 5     <meta name="viewport" content="width=device-width,initial-scale=1.0">
 6     <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
 7     <title>myapp</title>
 8   </head>
 9   <body>
10     <div id="app"></div>
11     <!-- built files will be auto injected -->
12     <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
13     <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
14     <script src="https://unpkg.com/element-ui/lib/index.js"></script>
15     <script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts-en.min.js"></script>
16   </body>
17 </html>
```

这里注意引入的先后顺序，通常js 文件放在底部，css文件放在head标签中。

2. 配置webpack。

找到 build/webpack.base.conf.js文件，在 module.exports = { } 中添加以下代码：

```js
externals: {
  // 要引入的资源的名字：该模块提供给外部引用的名字(由对应的库自定)
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'element-ui': 'ELEMENTUI',
  'echarts': 'echarts'
}
```

这里书写的规则一定要注意，a:b ，a 是我们要告诉 webpack 不要打包的资源名称，就是我们下载的 第三方包，比如 `vuex`, `element-ui`，b 是这些第三方包固定的提供给外部引用的变量，这个不能我们自己随便定义，比如 vue-router 必须写成 VueRouter，不能写 vue-router，切记。

3. 在入口文件 `main.js` 或者是其它引用了这些资源的文件中注释掉之前引入的代码，比如：

```js

// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import echarts from 'echarts'

// Vue.use(ElementUI)
// Vue.prototype.$echarts = echarts
```

router/index.js文件下:

```js
// import Vue from 'vue'
// import router from 'vue-router' // 这里才是引入的路由
// Vue.use(VueRouter)
```

经过以上三步，我们即可发现再次打包后 `vendor.js` 文件小了很多，并且项目也能运行起来。

如果有开启 Eslint 插件，可能会出现报警告，这里主要关注是否能运行即可。

### 路由懒加载

原本我们项目是在首页即开始加载所有页面所需要的资源，这会耗费大量的时间，延迟首页渲染时间，使得用户体验即为不好，我们可以采用路由懒加载技术，让每个路由组件需要的资源在该路由组件被访问到的时候才去加载，大大减少首页渲染时间和压缩打包后的文件体积。

> 路由懒加载技术，在vue官网有详细介绍，不清楚可以直接访问：[Vue路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

### 取消生产环境的 map 文件

我们在打包的时候选择取消生成 map文件，这样打包速度快一些，整个项目文件也小很多（map文件一般都很大）。

方法： 找到config/index.js ，将生产环境 Source Maps 取消即可。

```js
productionSourceMap: false
```
