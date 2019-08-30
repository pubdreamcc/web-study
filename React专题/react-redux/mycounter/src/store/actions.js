// 创造action对象的工厂函数模块
import {DECREASEMENT, INCREASEMENT} from './action-types'

// 同步action， 返回一个对象
export const  decreasement = (number) => ({type: DECREASEMENT, data: number})
export const  increasement = (number) => ({type: INCREASEMENT, data: number})
// 异步action ，返回一个函数
export const  increasementAsync = (number) => {
  return dispatch => {
    // 1. 执行异步任务
    setTimeout(() => {
      // 2. 异步任务结束，需要返回一个同步action
      dispatch(increasement(number))
    }, 1000)
  }
}