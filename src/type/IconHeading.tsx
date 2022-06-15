import React, {HTMLProps, ReactNode} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Heading} from './Heading'

interface IconHeadingProps extends HTMLProps<Element> {
  children: ReactNode,
  className?: string,
  icon: IconProp,
  iconSize?: number,
}

export function IconHeading({children, className = '', icon, iconSize = 4}: IconHeadingProps) {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className={`w-${iconSize} h-${iconSize} text-gray-400 dark:text-gray-500`} />
      <Heading className={className}>{children}</Heading>
    </div>
  )
}