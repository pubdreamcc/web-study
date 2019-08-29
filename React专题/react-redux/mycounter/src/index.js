import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import {Provider} from 'react-redux'
import store from './store/store'
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
document.getElementById('root'))


// 给store 注册监听器，当store中的状态数据发生改变时，重新渲染界面
// const fun = store.subscribe(() => {
//   // console.log(store.getState())
//   if (store.getState() === 8) {
//     // 取消监听
//     fun()
//   }
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
// // fun()