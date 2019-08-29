// redux 核心 store 对象模块
import { createStore } from 'redux'
import {increase} from './reducers'
export default createStore(increase)