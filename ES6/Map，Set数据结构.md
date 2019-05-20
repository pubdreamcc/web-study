## Map

`Map`对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。构造函数`Map`可以接受一个数组作为参数。

## Map和Object的区别

* 一个` Object` 的键只能是字符串或者 `Symbols`，但一个` Map` 的键可以是任意值。

* ` Map `中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。

* `Map `的键值对个数可以从 size 属性获取，而 `Object` 的键值对个数只能手动计算。

* `Object` 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

1. Map对象的属性

* size：返回Map对象中所包含的键值对个数

2. Map对象的方法

* set(key, val): 向Map中添加新元素

* get(key): 通过键值查找特定的数值并返回

* has(key): 判断Map对象中是否有Key所对应的值，有返回true,否则返回false

* delete(key): 通过键值从Map中移除对应的数据

* clear(): 将这个Map中的所有元素删除

```javascript
const set = new Set([['a', 1],['b', 2]])
const m1 = new Map(set)
m1.get('a')  // 1

const m2 = new Map([['c', 3]])
const m3 = new Map(m2)
m3.get('c') // 3
```

3. 遍历方法

* `keys()`：返回键名的遍历器

* `values()`：返回键值的遍历器

* `entries()`：返回键值对的遍历器

* `forEach()`：使用回调函数遍历每个成员

```javascript
const map = new Map([['a', 1], ['b',  2]])

for (let key of map.keys()) {
  console.log(key)
}
// "a"
// "b"

for (let value of map.values()) {
  console.log(value)
}
// 1
// 2

for (let item of map.entries()) {
  console.log(item)
}
// ["a", 1]
// ["b", 2]

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value)
}
// "a" 1
// "b" 2

// for...of...遍历map等同于使用map.entries()

for (let [key, value] of map) {
  console.log(key, value)
}
// "a" 1
// "b" 2
```

4. map与其他数据结构的互相转换

* map转换为数组（使用扩展运算符）

```javascript

const arr = [[{'a': 1}, 111], ['b': 222]]

const myMap = new Map(arr)

[...myMap] // map转数组。 [[{'a': 1}, 111], ['b': 222]]
```

* `Map`与对象的互换

```javascript
const obj = {}
const map = new Map(['a', 111], ['b', 222])
for(let [key,value] of map) {
  obj[key] = value
}
console.log(obj) // {a:111, b: 222}
```

* `JSON `字符串要转换成` Map`可以先利用JSON.parse()转换成数组或者对象，然后再转换即可。

## Set

`Set`对象允许你存储任何类型的值，无论是原始值或者是对象引用。它类似于数组，但是成员的值都是唯一的，没有重复的值。
`Set` 本身是一个构造函数，用来生成`Set` 数据结构。`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

## Set中的特殊值

`Set` 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：

* +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复

* undefined 与 undefined 是恒等的，所以不重复

* NaN 与 NaN 是不恒等的，但是在 Set 中认为NaN与NaN相等，所有只能存在一个，不重复。

1. Set实例对象的属性

* size：返回Set实例的成员总数。

2. Set实例对象的方法

* `add(value)`：添加某个值，返回 Set 结构本身(可以链式调用)。

* `delete(value)`：删除某个值，删除成功返回`true`，否则返回`false`。

* `has(value)`：返回一个布尔值，表示该值是否为Set的成员。

* `clear()`：清除所有成员，没有返回值。

```javascript
const mySet = new Set(['a', 'a', 'b', 1, 2, 1])
console.log(mySet)  // {'a', 'b', 1, 2}
myset.add('c').add({'a': 1})
console.log(mySet) // {'a', 'b', 1, 2, 'c', {a: 1}}
console.log(mySet.size) // 6

mySet.has(2) // true
```

3. 遍历方法

* `keys()`：返回键名的遍历器。

* `values()`：返回键值的遍历器。
* `entries()`：返回键值对的遍历器。
* `forEach()`：使用回调函数遍历每个成员。

由于`Set`结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

```javascript
const set = new Set(['a', 'b', 'c'])

for (let item of set.keys()) {
  console.log(item)
}
// a
// b
// c

for (let item of set.values()) {
  console.log(item)
}
// a
// b
// c

for (let item of set.entries()) {
  console.log(item)
}
// ["a", "a"]
// ["b", "b"]
// ["c", "c"]

// 直接遍历set实例，等同于遍历set实例的values方法
for (let i of set) {
  console.log(i)
}
// a
// b
// c

set.forEach((value, key) => console.log(key + ' : ' + value))

// a: a
// b: b
// c: c
```

4. Set 对象作用

* 数组去重(利用扩展运算符)

```javascript
const mySet = new Set([1, 2, 3, 4, 4])
[...mySet] // [1, 2, 3, 4]
```

* 合并两个set对象

```javascript
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let union = new Set([...a, ...b]) // {1, 2, 3, 4}
```

* 交集 

```javascript
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersect = new Set([...a].filter(x => b.has(x)))  // {2, 3} 利用数组的filter方法
```

* 差集

```javascript
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let difference = new Set([...a].filter(x => !b.has(x))) //  {1} 
```
