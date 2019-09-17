import React, {useContext} from 'react'
import {colorContext} from '../color'
export default function ShowArea() {
  const {color} = useContext(colorContext)
  return (
    <p style={color}>
      字体颜色为{color.color}
    </p>
  )
}
