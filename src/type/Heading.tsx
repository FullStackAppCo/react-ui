import React, {ReactNode} from 'react'

interface HeadingProps {
  children: ReactNode,
  className?: string,
  level?: 1 | 2 | 3 | 4 | 5 | 6,
}

export default function Heading({ children, className = '', level = 2 }: HeadingProps) {
  const Tag = `h${level}`
  className = `text-gray-800 dark:text-gray-300 font-display tracking-wide ${className}`

  return <Tag className={className}>{ children }</Tag>
}