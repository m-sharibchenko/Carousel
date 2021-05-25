import React from 'react'
import './style.css'

export function MainContainer (props) {
  return (
    <div className="main-container">
      {props.children}
    </div>
  )
}