`call()`，`apply()`，`bind()`方法都可以为某个函数指定特定的上下文对象（`this`），但是它们之间也有一些区别，今天这里来简单总结下。

首先来看：

```javascript
const obj1 = {
  name: 'wangzhan',
  age: 24
}

const obj =　{
  name: 'pubdreamcc',
  age: 24,
  slogan: function () {
    console.log(`我的名字是：${this.name}`)
  }
}

obj.slogan()
```

显然上面的输出结果为：  `pubdreamcc`

当我们使用 `call()` 来改变  `slogan` 函数执行的上下文，看下面代码：

```javascript
...
obj.slogan.call(obj1)
```

此时打印的结果为： `wangzhan` ，或者换用 `apply()` 也能达到相同的效果。

```javascript
obj.slogan.apply(obj1)
```

那么`call`，和`apply`之间的区别在哪里呢？

答案：两者的参数不同。call()除了第一个参数，后面的参数为字符串，分别一一对应被调用函数的参数。

```javascript
// 修改下slogan函数

const obj =　{
  name: 'pubdreamcc',
  age: 24,
  slogan: function (address) {
    console.log(`我的名字是：${this.name}，我住在${address}`)
  }
}

obj.slogan.call(obj1, "深圳")
```

这时候输出的结果为： `wangzhan` 和 `深圳` ， `深圳` 这个参数就是 `call() ` 后面传进来的。

如果换成 `apply` ，则必须把参数封装成一个数组，因为 `apply()` 第二个参数必须为数组。

```javascript
obj.slogan.apply(obj1, ['深圳'])
```

这就是两者最重要的区别。

说完了call 和 apply ，说一下 bind

`bind()` 也可以改变函数执行的上下文，但是它与 call() 和 apply() 最主要的区别是 `bind()` 函数返回的是改变了上下文的函数对象，需要单独调用，call和apply 默认都直接调用了函数。

```javascript
obj.slogan.bind(obj1, '深圳')()
```

最后必须加上一个 `()` 调用，
函数才会执行，否则函数没执行。 `bind` 传参和 `call` 类似，但也可以在手动调用的时候传参，即在最后一个 `()` 里面加入  `"深圳"` ， 也可以达到效果。
