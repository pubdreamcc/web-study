// 包含多个 reducer 的模块, reducer 直接操作redux 中的 store 根据不同的 action 修改状态数据
import {INCREASEMENT, DECREASEMENT} from './action-types'
export const increase = (state, action) => {
  switch (action.type) {
    case DECREASEMENT:
      return state - action.data
    case INCREASEMENT:
      return state + action.data
        
    default:
      return 1
  }
}