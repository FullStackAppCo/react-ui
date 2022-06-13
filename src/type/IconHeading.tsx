import React, {HTMLProps, ReactNode} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Heading from "type/Heading";

interface FooterHeadingProps extends HTMLProps<Element> {
  children: ReactNode,
  icon: IconProp,
}

export function IconHeading({ children, icon }: FooterHeadingProps) {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className="text-gray-400 dark:text-gray-500" />
      <Heading>{ children }</Heading>
    </div>
  )
}