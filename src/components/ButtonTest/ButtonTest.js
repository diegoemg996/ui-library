import React from 'react'
import PropTypes from 'prop-types';


export const ButtonTest = ({label, ...props}) => {
  return (
    <button {...props}>
        {label}
    </button>
  )
}

ButtonTest.propTypes = {
    label: PropTypes.string.isRequired
}

