# 场景

在列表中进行删除或新增一条数据时候，往往需要页面实时展现新的列表。

## 碰到的问题

`Vue` 在当前组件中修改了数据，路由重新定位到当前页面，页面是不会刷新重载的。（vue-router）

## 解决办法

查了一些资料，网上有说使用 `window.reload()` 或者 使用 `this.$route.go(0)` 进行强制刷新当前页，但是发现整个浏览器进行重载，页面闪烁，体验极为不好。

最后选用的是 Vue 自带的 api   `provide / inject组合`

### provide/inject

provide 和 inject 往往是成对出现，它们是 Vue 2.0 中新增的一个用于 父组件 向子组件传递数据的方法。

* provide：Object | () => Object
* inject：Array<string> | { [key: string]: string | Symbol | Object }

`provide` 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。

`inject` 选项通常是一个字符串或者数组，表面子组件需要接受的属性。

代码：

```js

// 父组件
name: 'App',
provide() {
  return {
    reload: this.reload
  }
},
...
methods: {
  reload() {
    this.isRouterAlive = false
    this.$nextTick(function() {
      this.isRouterAlive = true
    })
  }
}

// 子组件

name: 'children',
inject: ['reload'], // 申明需要接收父组件的属性
methods: {
  delData(){
    //在axios成功的回调里面
    this.reload() // 会调用父组件的 reload() 方法
}

```

provide/inject 可以用于多层次嵌套关系的组件之中，只要这两个组件是子孙关系，不管嵌套层次有多深，当前组件都可以接受到祖先组件 provide 的属性。

利用 provide/inject 就可以刷新我们当前路由，解决开篇遇到的问题。

## 原理

刷新当前路由的原理其实就是 利用 `<router-view></router-view>` 的 渲染和不渲染 ，也就是 `v-if` 状态的切换。

这里我们在父组件中定义了一个 属性 `isRouterAlive` ，默认值是 `true` ， 绑定给`<router-view></router-view>` ，然后利用 `isRouterAlive` 状态 的转变来实现 路由的刷新效果。

故，我们在子组件中操作完列表的删除或添加之后，调用 父组件传递的 `reload()` 方法 即可修改 `isRouterAlive` ，从而刷新当前路由。
