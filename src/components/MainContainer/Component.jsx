import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { getPrevIndex, getNextIndex } from './utils/findCurrentIndex'
import { contentPropTypes } from '../../propTypes'

export function MainContainer (props) {
  const { content, changeCurrent } = props
  const currentElement = useRef()


  useEffect(() => {
    currentElement.current.scrollIntoView();
  }, [content])

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
      <button
        onClick={showPrev}
        className="btn-change-item btn-prev"
        // style={{display: content.current === content[0] ? 'none' : null}}
      >
        prev
      </button>

      <ul className="main-container__content">
        {content.map(({ id, content, current }) => {
          return <li key={id}
            // style={{ display: current ? null : 'none'}}
                     className={current ? 'content__item-wrapper current' : 'content__item-wrapper'}
                     ref={current ? currentElement : null}
          >
            <div className='content__item'>{content}</div>
          </li>
        })}
      </ul>


      <button
        onClick={showNext}
        className="btn-change-item btn-next"
        // style={{display: content.current === content[content.length - 1] ? 'none' : null}}
      >
        next
      </button>
    </div>
  )
}

MainContainer.propTypes = {
  content: PropTypes.arrayOf(contentPropTypes),
  changeCurrent: PropTypes.func,
}