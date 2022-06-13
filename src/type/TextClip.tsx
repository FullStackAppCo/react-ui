import React, {ReactNode} from 'react'

interface TextClipProps {
  children: ReactNode,
  className?: string,
}

export function TextClip({ children, className = '' }: TextClipProps) {
  return <span className={`bg-clip-text text-transparent ${className}`}>{ children }</span>
}