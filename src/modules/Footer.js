import React from 'react'
import PropTypes from 'prop-types'

export const Footer = (props) => {
    const copyrightStyle = {
        backgroundColor: 'rgba(0,0,0,0.05)',
    }
  return (
<footer className="mt-4 text-center text-lg-start bg-light text-muted">
  <div className="text-center p-4" style={copyrightStyle}>
    Made by {props.name}
  </div>
</footer>
  )
}

Footer.defaultProps = {
    name : "Enter your name here"
}

Footer.propTypes = {
    name : PropTypes.string
}