import React, { useState } from 'react'
import { content } from '../constants'
import { MainContainer } from './MainContainer'

export function App () {
  const [items, setItems] = useState(content)
  return (
    <div>
      {items.map(({id, content, current}) => {
        console.log(current)
        return current
          ? <MainContainer key={id}>{content}</MainContainer>
          : <MainContainer key={id}>{id} {content}</MainContainer>
      })}
    </div>
  )
}

