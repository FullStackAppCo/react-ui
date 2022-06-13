import React, {ReactNode} from 'react'

interface FooterLegalProps {
  children?: ReactNode,
  className?: string,
  lines?: Array<ReactNode>,
}

export function Legal({ children, className = '', lines = [] }: FooterLegalProps) {
  if (lines.length === 0) lines.push(children)

  return (
    <div className={`space-y-3 text-gray-700 dark:text-gray-400 ${className}`}>
      {lines.map((line, i) => <small key={i} className={`block leading-loose`}>{line}</small>)}
    </div>
  )
}