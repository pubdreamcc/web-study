// UI 组件： 负责渲染页面视图
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increasement: PropTypes.func.isRequired,
    decreasement: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props)
    this.select = React.createRef()
  }
  increasement = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    // store.dispatch(increasement(number))
    this.props.increasement(number)
  }
  decreasement = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    // store.dispatch(decreasement(number))
    // console.log(store.getState())
    this.props.decreasement(number)
  }
  increasementOfOdd = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    if (this.props.count % 2 === 1) {
      // store.dispatch(increasement(number))
      this.props.increasement(number)
      // console.log(typeof store.getState() === 'number')
    }
  }
  increasementOfAsync = () => {
    // 更新store中的状态数据
    const number  =this.select.current.value * 1
    setTimeout(() => {
      this.props.increasement(number)      
    }, 1000)
  }
  render() {
    return (
      <div>
        <p>数量：{this.props.count}</p>
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
