import React, {useContext} from 'react'
import {UPDATE_COLOR, colorContext} from '../color'
export default function Buttons() {
  const {dispatch} = useContext(colorContext)
  return (
    <React.Fragment>
      <button onClick={()=> dispatch({type: UPDATE_COLOR, color: 'blue'})}>蓝色</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button  onClick={()=> dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
    </React.Fragment>
  )
}
