函数的`call()`，`apply()`，`bind()` 方法在我们面试的时候经常会被问到，今天我们自己动手来实现下这三种方法。

## 手写 `call()`

```js
Function.prototype.myCall = function (context, ...args) {
  // 简要判断，如果context 没传则默认为 window
  context = context || window
  args = args? args : []
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  // context新增的属性指向调用 myCall 的函数
  context[key] = this
  //通过隐式绑定的方式调用函数
  const result = context[key](...args)
  //删除添加的属性
  delete context[key]
  // 将函数调用的结果返回
  return result
}
```

这样一个简易版的 `call()` 就实现了，当然我这里没有做调用 `call()` 的数据类型做判断，读者可以自己探索。

## 手写 `apply()`

```js

Function.prototype.myApply = function (context, args) {
  // 简要判断，如果context 没传则默认为 window
  context = context || window
  args = args? args : []
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  // context新增的属性指向调用 myCall 的函数
  context[key] = this
  //通过隐式绑定的方式调用函数
  const result = context[key](...args)
  //删除添加的属性
  delete context[key]
  // 将函数调用的结果返回
  return result
}
```

有了 `call()`，其实`apply()`实现起来差不多，也就是传参不一样而已。

## 手写 `bind()`

`bind()` 和 `apply()`，`call()`有些区别，`bind()`调用后不是返回函数执行的结果，而是返回一个更换了内部 `this` 指向的新函数。既然返回的是一个函数，那么调用方式就有两种情况，有可能是普通函数直接调用，也有可能当作构造函数来调用，所以我们需要分两种情况。

还有就是调用 `bind()` 传参和给返回的新函数传参这两种情况都是存在的。

```js

Function.prototype.myBind = function (context, ...args) {
  // 创建变量保存this
  const fn = this
  args = args ? args : []
  // 返回一个新函数
  return function newFunc = (...newArgs) {
    // 判断返回的新函数是否是以构造函数形式调用，即==》 new newFunc
    if (this instanceof newFunc) {
      // 构造函数里面的this 指向构造函数创建的实例对象
      return new fn(...args, ...newArgs)
    }
    // 直接返回修改后 this 的函数调用结果，利用apply
    return fn.apply(context, [...args,...newArgs])
  }
}
```

以上所有实现可以再加点判断啊,例如调用的不是function就返回或者抛出错误啊之类的.我这里就不处理了

以上就是apply,call,bind的实现了。
