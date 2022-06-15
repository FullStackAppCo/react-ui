import React, {ReactNode} from 'react'
import {TextClip} from "./TextClip";

interface GradientTextProps {
  children: ReactNode,
  className?: string,
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  className = [
    'bg-gradient-to-br from-primary-gradient-start',
    'to-primary-gradient-end',
    className
  ].join(' ')

  return (
    <TextClip className={className}>{ children }</TextClip>
  )
}