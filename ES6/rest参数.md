ES6 为函数提供了一种 `rest` 参数，又名：剩余参数。形式为：`...变量名`。`rest` 参数用于获取函数的多余参数，实际就是替换`arguments` 对象。

即 `rest` 参数为真正的数组，`arguments` 是一个伪数组，只是可以通过下标访问而已。

```javascript
function add (...values) {
  console.log(values)
}

add(1) // [1]
add(1,2,4) // [1, 2, 4]
```

以上代码利用 `rest` 参数可以向该函数传入任意数目的参数。

注意：`rest`参数之后不能再有其他参数(即只能是最后一个参数)，否则报错。

```javascript
function add (a, ...values, b) {

} // 报错
```

函数的 `length` 属性不包括  `rest` 函数

栗子：
```javascript
　  (function(a) {}).length  // 1

　  (function(...a) {}).length // 0

　  (function(a, ...b) {}).length //1　　
```
