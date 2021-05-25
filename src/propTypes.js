import PropTypes from 'prop-types'

export const contentPropTypes = PropTypes.shape({
  id: PropTypes.string,
  content: PropTypes.string,
  current: PropTypes.bool,
})
