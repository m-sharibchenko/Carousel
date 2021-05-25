import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { getPrevIndex, getNextIndex } from './utils/findCurrentIndex'
import { contentPropTypes } from '../../propTypes'

export function MainContainer (props) {
  const { content, changeCurrent } = props

  const showPrev = () => {
    const prevIndex = getPrevIndex(content)
    changeCurrent(content[prevIndex].id)
  }

  const showNext = () => {
    const nextIndex = getNextIndex(content)
    changeCurrent(content[nextIndex].id)
  }

  return (
    <div className="main-container">
      <button onClick={showPrev} className="btn-change-item">prev</button>

      {content.map(({id, content, current}) => {
        return <div key={id} style={{ display: current ? null : 'none'}}>{content}</div>
      })}

      <button onClick={showNext}>next</button>
    </div>
  )
}

MainContainer.propTypes = {
  content: PropTypes.arrayOf(contentPropTypes),
  changeCurrent: PropTypes.func,
}