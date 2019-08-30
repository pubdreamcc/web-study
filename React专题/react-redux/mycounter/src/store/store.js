// redux 核心 store 对象模块
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))