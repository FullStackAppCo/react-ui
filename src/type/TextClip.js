import React from 'react'

export function TextClip({ children, className }) {
  return <span className={`bg-clip-text text-transparent ${className}`}>{ children }</span>
}

TextClip.defaultProps = {
  className: '',
}