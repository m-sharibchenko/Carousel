import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { contentPropTypes } from '../../propTypes'

export function Thumbnails (props) {
  const { content, changeCurrent } = props
  const currentThumbnail = useRef()

  useEffect(() => {
    currentThumbnail.current.scrollIntoViewIfNeeded();
  }, [content])

  const onThumbnailClick = (evt) => {
    const itemId = evt.target.getAttribute('data-id')
    changeCurrent(itemId)
  }

  return (
    <ul className="thumbnails">
      {content.map(({id, content, current}) => {
        return <li key={id}
                    data-id={id}
                    className={current ? "thumbnail show" : "thumbnail blur"}
                    ref={current ? currentThumbnail : null}
                    onClick={onThumbnailClick}
        >
          {content}
        </li>
      })}
    </ul>
  )
}

Thumbnails.propTypes = {
  content: PropTypes.arrayOf(contentPropTypes),
  changeCurrent: PropTypes.func,
}