`jsx` 是一种特殊的 js 语法糖，可以在代码中把 html 标签当对象使用，其可以总结成以下几个特点：

1. 不加任何引号

在 `jsx` 语法中 html 标签都是当作对象直接使用，无需加引号，如下：

```jsx
var div = <div>我是一个div</div>;
```

2. 标签一定要有对应的结束标标签或结束标识：

对于HTML单标签来说，也许我们没有正确关闭标签，在浏览器中也可以正常渲染，但是在 `jsx` 中，所以的标签必须要正确的关闭。

下面的代码在浏览器中显示正常：

```html
<input type='text' value='文本'>
```

但是在 `jsx` 中会报错，必须正确写成以下格式：

```jsx
var input = <input type='text' value='文本'/>;
```

3. 只能有一个根节点

在 `jsx` 语法中，最顶层的结构一定只有一个节点，不能出现兄弟节点。

如：

```jsx
var div = 
  <div>
    <h1>我是一个h1</h1>
    <h2>我是一个h2</h2>
  </div>
```

4. 不能在标签当中加注释

在 `jsx` 语法当中，`html` 标签是一个对象，是一种数据结构，而不是真实的 `dom` 节点，也不是字符串，所以在标签当中不能添加注释。 下面的代码是在标签当中添加了注释，所以会报错。

```jsx
var html = 
  <div>
    <!--不能添加注释，这里会报错-->
    <h1>Tom</h1>
    <h1>Lucy</h2>
  </div>
```

5. `jsx` 语法允许 `html` 标签和 `javascript` 代码混写

在 jsx 语法当中，要在 html 标签中用到 js 代码，则用花括号（{expression}）括起来之，这里只需要记住：**变量用｛｝括起来即可**

```jsx

var name = 'cc';
var style = {fontSize: '12px', color: 'red'};

var div = <div><p style={style}>{name}</p></div>
```

上面的代码最终会渲染成：

```html
<div><p style="font-size: 12px; color: red">cc</p></div>
```

## 总结

这里再重复一遍：所谓的 `JSX` 其实就是 `JavaScript` 对象。每当在 `JavaScript` 代码中看到这种 `JSX` 结构的时候，脑子里面就可以自动做转化，这样对你理解` React.js` 的组件写法很有好处。
