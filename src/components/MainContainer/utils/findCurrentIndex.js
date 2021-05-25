const findCurrentIndex = (arr) => {
  return arr.findIndex(({current}) => current)
}

export const getPrevIndex = (arr) => {
  if (findCurrentIndex(arr) === 0) {
    return arr.length - 1
  }

  return findCurrentIndex(arr) - 1
}

export const getNextIndex = (arr) => {
  if (findCurrentIndex(arr) === (arr.length - 1)) {
    return 0
  }

  return findCurrentIndex(arr) + 1
}