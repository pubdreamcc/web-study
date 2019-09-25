# 前言

经常会在一些网站或博客看到“深克隆”，“浅克隆”这两个名词，其实这个很好理解，今天我们就在这里分析一下`js深拷贝和浅拷贝`。

## 浅拷贝

我们先以一个例子来说明js浅拷贝：

```javascript
var n = {a: 1, b: 2}
var m = n
m.a = 12
console.log(n.a) // ?
```
上面显然 `n.a` 的值会变为 12，这就是js浅拷贝。**浅拷贝只是拷贝的指向对象的指针，本质上还是指向同一个对象。**

## 深拷贝

同样我们还是以一个例子来说明啥叫 `js deep clone` ：

```javascript
var n = {a: 1, b: 2}
var m = {a: n.a, b: n.b}
m.a = 12
console.log(n.a) // ?
```
上面的输出结果显然还是 `1 ` ，m 和 n 虽然所有的属性和值全部相同，但是它们是两个不同的对象，它们在堆内存中占据两块不同的内存地址，这就是深度拷贝。**深度拷贝就是完全复制一个新的对象出来，它们在堆内存中完全占据两个不同的内存地址。**

## js 实现深拷贝

### 简单一维数据结构

1. 手动直接赋值

> 上面的 深拷贝 例子

2. 利用 ES6 `Object.assign()` 方法

```js

const obj = {name: 'cc', age: 24}
const newObj = Object.assign({}, obj)
obj.name = 'cc1'
newObj.name ? // cc
```

### 二维的数据结构及以上

1. 简单粗暴的方式：`JSON.parse(JSON.stringify(obj))`。

缺点：它会对对于正则表达式类型、函数类型等无法进行深拷贝，而且会直接丢失相应的值，还有就是它会抛弃对象的 `constructor`。

```js
var obj = { a: {a: "cc"}, b: 123 }
var newObj = JSON.parse(JSON.stringify(obj))
newObj.b = 1234
console.log(obj)   // {a: {a: 'cc'}, b: 123}
console.log(newObj);    // {a: {a: 'cc'}, b: 1234}
```

2. 利用 jQuery

```js

// 浅拷贝
var newObj = $.extend({}, obj)

// 深拷贝
var newObj = $.extend(true, {}, obj) // 要求第一个参数必须为true
```

3. 自己动手实现一个简单深拷贝函数

```js
function deepClone(obj){
  if(typeof obj !== "object" || obj === null) return    
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj){
     if(obj.hasOwnProperty(key)){
        newObj[key] = typeof obj[key] === "object" && obj[key] !== null ? deepClone(obj[key]) : obj[key]
    }      
  }  
  return newObj
}
let obj = {a: 1, b: function(){}, c: {d: 2}}
deepClone(obj)  // {a: 1, b: function(){}, c: {d: 2}}
```

对于深拷贝来说最常用的就是这些方法，当然还有其他的一些库，比如 `deepCopy`，`lodash`等，这里就不深究。