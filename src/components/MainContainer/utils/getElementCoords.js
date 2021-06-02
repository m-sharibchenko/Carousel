import { getNextIndex, getPrevIndex } from './findCurrentIndex'

function getAllCoordsX (width, content) {
  const elWidth = width / content.length
  return content.reduce((acc, { id }, index) => {
    acc[id] = elWidth * (index + 1)
    return acc
  }, {})
}

export function getNextElCoords (width, content) {
  const nextEl = content[getNextIndex(content)].id
  return getAllCoordsX(width, content)[nextEl]
}

export function getPrevElCoords (width, content) {
  const prevEl = content[getPrevIndex(content)].id
  return getAllCoordsX(width, content)[prevEl]
}