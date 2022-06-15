import React, {HTMLProps, ReactNode} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Heading} from './Heading'

interface IconHeadingProps extends HTMLProps<Element> {
  children: ReactNode,
  className?: string,
  icon: IconProp,
  iconSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
}

export function IconHeading({children, className = '', icon, iconSize = 4}: IconHeadingProps) {
  // Ensure Tailwind can detect the classes.
  const iconClasses = {
    [1]: 'w-1 h-1',
    [2]: 'w-2 h-2',
    [3]: 'w-3 h-3',
    [4]: 'w-4 h-4',
    [5]: 'w-5 h-5',
    [6]: 'w-6 h-6',
    [7]: 'w-7 h-7',
    [8]: 'w-8 h-8',
    [9]: 'w-9 h-9',
    [10]: 'w-10 h-10',
  }[iconSize]
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className={`${iconClasses} text-gray-400 dark:text-gray-500`} />
      <Heading className={className}>{children}</Heading>
    </div>
  )
}