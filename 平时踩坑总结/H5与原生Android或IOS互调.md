# 前言

当今做混合App的企业非常之多，很多App都是基于 H5 技术开发，只有一些 H5 实现不了的功能，才会用原生来做，这就涉及到 H5 和 原生 Android/IOS 互相调用的问题了。

总结一点 ： **万事靠 `window` 对象**。

H5 这边能做的也只能交给 `window` 这个全局对象了，所有的一切交互就靠它了。

## H5 调用 Android 定义的方法

> 技巧：`window.安卓定义的类名.安卓定义的方法(传参)`

这里一定要注意不能直接通过 `window` 对象的安卓方法名属性直接调用，会报错，必须要到安卓开发人员定义的类名。

## H5 调用 IOS 定义的方法

> 技巧 `window.webkit.messageHandlers.IOS定义的方法名.postMessage(传参)`

`window.webkit.messageHandlers` 为固定写法，我们照着写就好，后面跟上 IOS 定义好的方法，这里注意传参一定使用 `postMessage()` 。

**重要的事情说三遍！重要的事情说三遍！重要的事情说三遍！**

`window.webkit.messageHandlers.AppModel.postMessage(NULL或者其他参数)` ，参数 `messageBody` 里面不能为空什么都不写，不然不会走代理方法。

## Android/IOS 调用 H5 定义的方法

我们只需要将定义好的方法挂载到 `window` 对象上即可，安卓或IOS 开发人员即可调用我们定义的方法。

代码示范：

```js

export default {
  name: 'App',
  data () {
    return {
      checked: false,
      NOFingerPrint: false
    }
  },
  methods: {
    handleClick () {
      this.checked = !this.checked
    }
  },
  // 然后在组件的mounted() 钩子里面将组件的方法挂载到 window 对象上，这一步很重要
  mounted () {
    window.handleClick = this.handleClick
  }
}
```

特别说明，当前端采用框架写的时候，比如 `Vue`，我们必须手动将 定义好的方法挂载到 `window` 对象上，因为在组件的内部定义的方法默认是在该组件实例上。

小建议：

针对前端采用 `Vue` 框架写代码的时候，可以定义一个 `app.js` 文件夹，用来保存和原生交互的方法。

```js

// app.js

let hybrid = {
  install: function (Vue) {
    Vue.prototype.$app = this
  }
}
// 将hybrid挂载在window
window.hybrid = hybrid

export default hybrid
```

在页面入口文件 `main.js` 中引入

```js
import Vue from 'vue'
import hybrid from './app/app.js'

Vue.use(hybrid) // 经过注册之后，其他的组件都可以通过 this.$app 访问到 hybrid
```

在需要导出方法给原生调用的组件中

```js
...
mounted () {
  // 把自己定义的方法传到 window 对象，供原生调用
  this.$app.changeFingerPrint = this.changeFingerPrint // 自己定义在methods中的方法
}
...
```
