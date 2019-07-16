平时在开发移动端项目时候，碰到一些东西可以用 `canvas` 来实现，今天碰到了一个问题，在不同手机上 canvas 高宽不能自适应，在这里总结下。

canvas 标签的高度或宽度不能通过 `style` 样式指定，需要通过标签属性 width 和 height 来指定宽高，如下：

```html
<canvas width="200" heigt="300"></canvas>
```

浏览器渲染时会显示 canvas 宽： `200px`，高：`300px`。

如果不指定宽高，canvas的默认宽高为`300px * 150px`。

## 碰到的问题

如果在 canvas 标签内指定宽高后，在不同手机上就没有自适应效果（canvas高宽不变），即使使用了一些移动端适配方案。

## 解决办法

在 canvas 外层包裹一个父级 `div`，通过不同的手机屏幕动态获取 canvas 父级 div 的宽高，以此来设置 canvas 宽高。

这里就要求初始我们不能在 canvas 标签内指定宽高值。后期通过父级 div 的宽高自适应来动态设置 canvas 宽高，通常用 js 来实现。

代码举例：

```javascript
// 获取canvas
const canvas = document.querySelector('canvas')
// 获取canvas 直接父级 div
const divNode = document.querySelector('.wrap')
// 获取父级 div 的宽高，利用getBoundingClientRect()
const h = divNode.getBoundingClientRect().height  // 高

const w = divNode.getBoundingClientRect().width  // 宽

// 设置canvas宽高，一般通过canvas宽高与父级div宽高有着固定的比列(ratio)
canvas.width = w * ratio // 设置宽
canvas.height = h * ratio  //设置高
```

通过以上方法可以解决canvas在不同手机屏幕下 高宽自适应问题。
