import React, {ReactNode} from 'react'

interface ExternalLinkProps {
  children: ReactNode,
  className?: string,
  href: string,
}

export function ExternalLink({ children, className = '', href }: ExternalLinkProps) {
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