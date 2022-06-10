import React from 'react'
import {faInfinity, faMobileScreenButton, faTabletScreenButton, faLaptop, faComputer, faDisplay} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface LayoutIndicatorProps {
  className?: string,
  layoutMap?: Object,
}

export default function LayoutIndicator({ className, layoutMap }: LayoutIndicatorProps) {
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
    <div aria-hidden="true" className={`fixed bottom-4 right-6 p-5 w-16 h-16 flex items-center justify-center shadow-xl rounded-full inline-block bg-primary-500 dark:bg-primary-900 uppercase text-xs tracking-wider font-semibold text-white border-primary-800 border ${className}`}>
      {Object.entries(layoutMap).map(entries => {
        const [layout, data] = entries
        return (
          <div key={layout} className={`flex items-center justify-center ${data.classes.join(' ')}`}>
            <FontAwesomeIcon icon={data.icon} className="h-5" />
          </div>
        )
      })}
    </div>
  )
}