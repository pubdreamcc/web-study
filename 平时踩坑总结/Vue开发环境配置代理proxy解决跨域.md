# 问题

跨域在我们前端开发中经常见到，今天我就踩了一个坑：用 Vue 搭的环境，在本地开发环境运行时出现跨域。

## 解决办法

我们可以利用 Vue 自带的 node.js 代理服务器，通过修改vue proxyTable接口实现跨域请求。

在 `vue-cli`项目中的`config`文件夹下的`index.js`配置文件中，修改前的dev：

```js

dev: {  
  env: require('./dev.env'),  
  port: 8080,  
  autoOpenBrowser: true,  
  assetsSubDirectory: 'static',  
  assetsPublicPath: '/',  
  proxyTable: {}, 
  cssSourceMap: false  
}
```

只要修改里面的proxyTable: {}项

```js
proxyTable: {  
  '/api': {  // 表示 以 ‘/api’ 开头的地址需要代理为我们转发
      target: 'http://10.1.0.34:8000/',  // 需要代理的目标地址  
      changeOrigin: true,  // 是否跨域  
      secure: false, // 这个参数默认是 true，当我们请求是以 https 开头需要配置
      pathRewrite: {   // 路径重写
          '^/api': '/'   // 表示将来我们请求地址：'/api/user/xx' ，实际上请求的是： '/user/xx'。
      }
  }
}
```

配置好了之后，我们在写Ajax请求地址时：直接以 `/api` 开头，则代理会帮我们转发请求，解决了跨域问题。

example：

实际接口地址： `http://10.1.0.34:8000/user/manage`，我们写Ajax请求的地址：`/api/user/manage`。
