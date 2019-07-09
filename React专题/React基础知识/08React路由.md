# react-router

对于单页应用来说，路由肯定是必不可少的。`React` 中也有自己的一套路由机制，今天来聊聊 react 路由。

使用 react 路由先安装 
`react-router-dom`

```shell
npm install react-router-dom --save
```

在页面根组件 App 中引入路由第三方包

```javascript
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
```

react 路由提供了两种模式，一种是 `HashRouter`，一种是 `BrowserRouter`。HashRouter 是以 # 号方式匹配路由，从url中可以看出来，这个地址对于后端来说，全部指向同一个地址。
BrowserRouter 不存在 # 的，不同的路由对于后端也是不同的地址。

官网推荐的是 BrowserRouter，但是此方式需要服务器配合，而且有点不好的是重定向只能到首页，无法停留在当前页，具体大家可以查看网上的一些教程。

这里以 HashRouter 演示

代码举例：

```javascript
// App.js
import React, { Component } from 'react'
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
// 上面的意思是将导入的 HashRouter 重命名为 Router， HashRouter 表示一个路由的跟容器，将来，所有的路由相关的东西，都要包裹在 HashRouter 里面，而且，一个网站中，只需要使用一次 HashRouter 就好了

// Route 表示一个路由规则， 在 Route 上，有两个比较重要的属性， path   component

// Link 表示一个路由的链接 ，就好比 vue 中的 <router-link to=""></router-link>
import Movie from './Movie'
import About from './About'
export default class App extends Component {
  render() {
     // 当 使用 HashRouter 把 App 根组件的元素包裹起来之后，网站就已经启用路由了
    // 在一个 HashRouter 中，只能有唯一的一个根元素
    // 在一个网站中，只需要使用 唯一的一次 <HashRouter></HashRouter> 即可
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/movie'>电影</Link></li>
            <li><Link to='/about'>关于</Link></li>
          </ul>
          <Switch>
            <Redirect from='/' to='/movie' exact></Redirect>
          {/* Route 创建的标签，就是路由规则，其中 path 表示要匹配的路由，component 表示要展示的组件 */}
          {/* 在 vue 中有个 router-view 的路由标签，专门用来放置，匹配到的路由组件的，但是，在 react-router 中，并没有类似于这样的标签，而是 ，直接把 Route 标签，当作的 坑（占位符） */}
          {/* Route 具有两种身份：1. 它是一个路由匹配规则； 2. 它是 一个占位符，表示将来匹配到的组件都放到这个位置 */}
            <Route path='/movie' component={Movie} exact></Route>
            <Route path='/about' component={About} exact></Route>
            <Route  component={()=><div>页面失联</div>}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
```

上面还用到了路由的重定向，`Redirect` ，它表示当请求 `\` 根路径的时候， 路由会定向到 `/movie` 这个路由。

Route 中 `exact` 表示精确匹配路由，必须是 `/movie`地址 才匹配 Movie 组件，其它的都匹配不到 Movie 组件对应的路由。

## 路由传参

`React` 路由传参有常见的四种方式：

1. **params**

```javascript
<Route path='/path/:name' component={Path}/>
<link to="/path/2">xxx</Link>
this.props.history.push({pathname:"/path/" + name})

// 读取参数用:this.props.match.params.name
```

优势 ： 刷新地址栏，参数依然存在

缺点:只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋。

2. **query**

```javascript
<Route path='/query' component={Query}/>
<Link to={{ path : ' /query' , query : { name : 'sunny' }}}>
this.props.history.push({pathname:"/query",query: { name : 'sunny' }})

// 读取参数用: this.props.location.query.name
```

优势：传参优雅，传递参数可传对象，参数 在 url 地址栏不显示

缺点：刷新地址栏，参数丢失

3. **state**

```javascript
<Route path='/sort ' component={Sort}/>
<Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }})
// 读取参数用: this.props.location.state.name
```

state 和 query 的优缺点一样

4. **search**

```javascript
<Route path='/web/departManange ' component={DepartManange}/>
<link to="web/departManange?tenantId=12121212">xxx</Link>
this.props.history.push({pathname:"/web/departManange?tenantId" + row.tenantId});
读取参数用: this.props.location.search
```

优点：

刷新地址栏，参数依然存在。并且传递的参数以查询字符串的形式附带在 url 地址后


缺点：

地址栏不好看，如果传的值太多的话，url会变得长而丑陋。

`this.props.location.search` 获取到的是查询字符串，需要自己转换后得到实际参数。
