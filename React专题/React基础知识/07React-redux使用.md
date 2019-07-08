# 前言

类似于 `Vue`，`React` 中组件之间的状态管理 第三方包为：`react-redux`。`react-redux` 其实是 `Redux`的官方`React`绑定库，它能够使你的`React`组件从`Redux` `store`中读取数据，并且向`store`分发`actions`以更新数据。

值得一提的是 `redux` 其实是一个第三方 数据状态管理的库，它不仅仅可以和`react` 结合使用，你也可以把它应用到 `vue` 中 ， `react-redux` 其实是帮我们封装了 `redux` 连接 `react` 的一些操作，使用 `react-redux` 可以非常简单的在 `react` 中使用 `redux` 来管理我们应用的状态。

## 使用 redux 来管理 react 数据

### 开始之前先安装

```shell
npm install redux react-redux --save
```

安装完这两个库之后，可以用 `redux` 来创建 `store` ， 利用 `react-redux` 获取 `store` 中的数据或者更新数据。

`react-redux` 提供了两个常用的 `api` ，一个是： `Provider`，一个是：`connect`。 组件之间共享的数据是 `Provider` 这个顶层组件通过 `props` 传递下去的，**store必须作为参数放到Provider组件中去**。而 `connect` 则提供了组件获取 store 中数据或者更新数据的接口。

### 创建 store

了解一些基本的概念之后，我们现在开始来用。

在外围顶层组件中引入 `redux` 和  `react-redux` 两个库。我们在做业务之前都需要将页面拆分成不同的组件，这里的外围组件通常指的是我们拆分后的所有组件的父组件。

```javascript
import { createStore } from 'redux'
import { Provider } from 'react-redux'
```

引入 `createStore` 来创建组件共享的数据，这个是 `redux` 中提供的一个方法，我们直接引入。

```javascript
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)
```

上面的代码创建了一个 `{themeColor: 'red'}`  的 `store`，并且提供了修改颜色的方法，组件通过指定的 `action.type` 中的 `CHANGE_COLOR` 字段来修改主体颜色。代码中可以看出，我们传入非法的修改字段名，则返回原始的 `state`，即修改失败。

### 使用 store 中的 state

创建完数据之后，组件中怎样使用到全局的数据状态呢？请看下面：

在需要使用数据的组件中引入 `react-redux`

```shell
import { connect } from './react-redux'
```

我们从 `react-redux` 中引入了 `connect` 这个方法。其实 `connect` 方法一共有4个参数，这里主要讲前两个。

```javascript
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

`mapStateToProps` 字面含义是把state映射到props中去，意思就是把Redux中的数据映射到React中的props中去。

也就是说你React想把Redux中的哪些数据拿过来用。

```javascript
class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Header = connect(mapStateToProps)(Header)
```

上面代码是拿到  Redux `store` 中 `themeColor` 数据， 这是我们前面自己创建的数据，然后组件通过 `this.props.themeColor` 调用。

那么这样就可以实现渲染，就是把Redux中的state变成React中的props。


### 修改 store 中 state

现在的主题颜色是自己定义的红色，如果我们想在某个组件中修改这个全局的状态，比如修改为蓝色，该如何操作，这就涉及到修改 store 中 state。

修改 Redux 中的 state ，需要用到前面 connect 中的第二个参数：`mapDispatchToProps`，通过上面的分析，相信这个函数也很好理解，就是把各种 `dispatch`也变成了 `props` 让你可以直接使用，进而修改 `store` 中的数据。

```javascript
class SwitchColor extends Component {
  handleChangeColor (color) {
    this.props.changeColor(color)
  }
  render() {
    return (
      <div>
        <button style={{color: this.props.themeColor}} onClick={this.handleChangeColor.bind(this, 'blue')}>blue</button>
        <button style={{color: this.props.themeColor}} onClick={this.handleChangeColor.bind(this, 'red')}>red</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => {
      dispatch({type: 'CHANGE_COLOR', themeColor: color})
    }
  }
}
SwitchColor = connect(mapStateToProps, mapDispatchToProps)(SwitchColor)
```

上面的代码实现了通过点击按钮来修改主题颜色，我们在 `mapDispatchToProps` 中调用了 `dispatch()`  来通知 Redux `store` 修改 数据，这里需要注意传入 `dispatch()` 的参数为一对象，其中必须有 `type` 属性来告诉 store 修改哪些数据。

## 说明

本篇文章 出自于 我们 `GitHub` 仓库 `web-study` ，详情可见：[戳这里](https://github.com/pubdreamcc/web-study)， 欢迎 `star`，一起交流学习前端。
