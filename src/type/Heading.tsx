import React, {ElementType, ReactNode} from 'react'

interface HeadingProps {
  children: ReactNode,
  className?: string,
  level?: 1 | 2 | 3 | 4 | 5 | 6,
}

export function Heading({ children, className = '', level = 2 }: HeadingProps) {
  const Tag = `h${level}` as ElementType
  className = `font-display ${className}`

  return <Tag className={className}>{ children }</Tag>
}