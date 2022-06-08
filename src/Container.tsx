import React, {ElementType, ReactNode} from 'react'

interface ContainerProps {
  className?: string,
  tag?: ElementType
  children: ReactNode,
}

export function Container({ children, className, tag = 'div' }: ContainerProps) {
  const Tag = tag;
  return (
    <Tag className={`px-6 container mx-auto max-w-4xl ${className}`}>{ children }</Tag>
  )
}