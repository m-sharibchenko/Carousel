import React, { useState } from 'react'
import { content } from '../constants'
import { MainContainer } from './MainContainer'
import { Thumbnails } from './Thumbnails'

export function App () {
  const [items, setItems] = useState(content)

  const onChangeCurrent = (itemId) => {
    const newItems = items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          current: true
        }
      }
      return {
        ...item,
        current: false
      }
    })

    setItems(newItems)
  }

  return (
    <div>
      <MainContainer content={items} changeCurrent={onChangeCurrent}/>
      <Thumbnails content={items} changeCurrent={onChangeCurrent}/>
    </div>
  )
}

