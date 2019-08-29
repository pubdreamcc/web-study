// 创造action对象的工厂函数模块
import {DECREASEMENT, INCREASEMENT} from './action-types'

export const  decreasement = (number) => ({type: DECREASEMENT, data: number})
export const  increasement = (number) => ({type: INCREASEMENT, data: number})