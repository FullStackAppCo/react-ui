import React, {HTMLProps} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface FooterHeadingProps extends HTMLProps<Element> {
  icon: IconProp,
}

export function FooterHeading({ children, icon }: FooterHeadingProps) {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <h2 className="text-gray-800 dark:text-gray-300 text-lg font-display tracking-wide">{ children }</h2>
    </div>
  )
}