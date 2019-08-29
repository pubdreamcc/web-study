import React, { Component } from 'react'
import store from './store/store'
import {decreasement, increasement} from './store/actions'
export default class App extends Component {
  constructor (props) {
    super(props)
    this.select = React.createRef()
  }
  increasement = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    store.dispatch(increasement(number))
    console.log(store.getState())
  }
  decreasement = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    store.dispatch(decreasement(number))
    console.log(store.getState())
  }
  increasementOfOdd = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    if (store.getState() % 2 === 1) {
      store.dispatch(increasement(number))
      console.log(typeof store.getState() === 'number')
    }
  }
  increasementOfAsync = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    setTimeout(() => {
      store.dispatch(increasement(number))
      console.log(store.getState())
    }, 1000)
  }
  render() {
    return (
      <div>
        <p>数量：{store.getState()}</p>
        <div>
          <select ref={this.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increasement}>increasement</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.decreasement}>decreasement</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.increasementOfOdd}>increasementOfOdd</button>&nbsp;&nbsp;
          <button onClick={this.increasementOfAsync}>increasementOfAsync</button>&nbsp;&nbsp;
        </div>
      </div>
    )
  }
}
