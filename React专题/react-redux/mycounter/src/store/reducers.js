// 包含多个 reducer 的模块, reducer 直接操作redux 中的 store 根据不同的 action 修改状态数据
// reducer 是一个纯函数
import {INCREASEMENT, DECREASEMENT} from './action-types'
import {combineReducers} from 'redux'
const counter = (state, action) => {
  switch (action.type) {
    case DECREASEMENT:
      return state - action.data
    case INCREASEMENT:
      return state + action.data
        
    default:
      return 1
  }
}

const initUser = {name: 'cc', age: 24}
const user = (state=initUser, action) => {
  return state
}

export default combineReducers({counter, user})