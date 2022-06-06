import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export function FooterHeading({ children, icon }) {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <h2 className="text-gray-800 dark:text-gray-300 text-lg font-display tracking-wide">{ children }</h2>
    </div>
  )
}