import React from 'react'

export function Container({ children, className, tag }) {
  const Tag = tag;
  return (
    <Tag className={`px-6 container mx-auto max-w-4xl ${className}`}>{ children }</Tag>
  )
}

Container.defaultProps = {
  className: '',
  tag: 'div',
}