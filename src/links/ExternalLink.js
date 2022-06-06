import React from 'react'
import PropTypes from 'prop-types'

export function ExternalLink({ className, children, href }) {
  className = [
    'p-0.5',
    'font-medium text-primary-500 dark:text-primary-300 underline',
    'focus:outline-none focus:bg-focus-500 focus:text-black focus:no-underline',
    className,
  ].join(' ')

  return (
    <a href={href} className={className}>{ children }</a>
  )
}

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}

ExternalLink.defaultProps = {
  className: '',
}