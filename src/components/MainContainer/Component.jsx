import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { getPrevIndex, getNextIndex } from './utils/findCurrentIndex'
import { contentPropTypes } from '../../propTypes'
import { getNextElCoords, getPrevElCoords } from './utils/getElementCoords'

export function MainContainer (props) {
  const { content, changeCurrent } = props
  const currentElement = useRef()
  const contentContainer = useRef()

  useEffect(() => {
    currentElement.current.scrollIntoView();
  }, [content])

  const onMouseDown = (evt) => {
    console.log(evt.pageX, contentContainer.current.offsetLeft)
    contentContainer.current.classList.add('active')

  //   const width = evt.target.clientWidth
  //   // const scrollWidth = evt.target.parentElement.scrollWidth
  //   // let coords
  //
  //   if (evt.clientX > width / 2) {
  //     // coords = getNextElCoords(scrollWidth, content)
  //     // console.log('scroll to next', currentElement, coords)
  //     // currentElement.current.scrollTo(coords, 0)
  //
  //     const nextIndex = getNextIndex(content)
  //     changeCurrent(content[nextIndex].id)
  //   } else {
  //     // coords = getPrevElCoords(scrollWidth, content)
  //     // console.log('scroll to prev', coords)
  //
  //     const prevIndex = getPrevIndex(content)
  //     changeCurrent(content[prevIndex].id)
  //   }
  }

  const onMouseUp = (evt) => {
    contentContainer.current.classList.remove('active')
  }

  const onDragStart = (evt) => {
    // evt.preventDefault()
  }

  const onDragOver = (evt) => {
    // console.log(evt.pageX)
    console.log('onDragEnter', evt.pageX)
  }

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
        className="btn-change-item btn_prev"
        // style={{display: content.find(item => item.current)  === content[0] ? 'none' : null}}
      >
        prev
      </button>

      <ul className="main-container__content"
          ref={contentContainer}
          onDragOver={onDragOver}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onDragStart={onDragStart}
          draggable
        // onTouchStart={onMouse}
        // onDragEnter={onDragEnter}
      >
        {content.map(({ id, content, current }) => {
          return <li key={id}
                     // data-id={id}
                     className='content__item-wrapper'
                     ref={current ? currentElement : null}
          >
            {content}, {id}
          </li>
        })}
      </ul>


      <button
        onClick={showNext}
        className="btn-change-item btn_next"
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