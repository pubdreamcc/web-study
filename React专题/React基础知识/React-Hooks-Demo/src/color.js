import React, {createContext, useReducer} from 'react'

export const colorContext = createContext()

// reducer
export const UPDATE_COLOR = "UPDATE_COLOR"
const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return {color: action.color}
    default:
      return state 
  }
}

export default function Color (props) {
  const [color, dispatch] = useReducer(reducer, {color: 'red'})
  return (<colorContext.Provider value={{color, dispatch}}>
    {props.children}
  </colorContext.Provider>)
}