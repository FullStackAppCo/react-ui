import React from 'react'
import {faInfinity, faMobileScreenButton, faTabletScreenButton, faLaptop, faComputer, faDisplay} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface LayoutIndicatorProps {
  layoutMap?: Object,
}

export default function LayoutIndicator({ layoutMap }: LayoutIndicatorProps) {
  layoutMap = layoutMap ? layoutMap : {
    'all': {
      icon: faInfinity,
      classes: ['block', 'sm:hidden'],
    },
    'sm': {
      icon: faMobileScreenButton,
      classes: ['hidden', 'sm:block',  'md:hidden'],
    },
    'md': {
      icon: faTabletScreenButton,
      classes: ['hidden', 'md:block', 'lg:hidden'],
    },
    'lg': {
      icon: faComputer,
      classes: ['hidden', 'lg:block', 'xl:hidden'],
    },
    'xl': {
      icon: faDisplay,
      classes: ['hidden', 'xl:block', '2xl:hidden'],
    },
  }

  return (
    <div aria-hidden="true" className="w-screen flex justify-center items-center py-1 bg-primary-500 dark:bg-primary-900 h-10 uppercase text-xs tracking-wider font-semibold text-white">
      {Object.entries(layoutMap).map(entries => {
        const [layout, data] = entries
        return (
          <div key={layout} className={`space-x-1.5 ${data.classes.join(' ')}`}>
            <FontAwesomeIcon icon={data.icon} />
            <span>screen {layout}</span>
          </div>
        )
      })}
    </div>
  )
}