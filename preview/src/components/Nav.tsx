import * as React from 'react'
import {NavLink} from "react-router-dom"
import {kebabCase} from "lodash-es"

interface NavProps {
  className: string,
  pages: Array<string>,
}

export default function Nav({ className = '', pages }: NavProps) {

  function itemClasses({ isActive }) {
    return [
      'inline-block px-3 py-1 rounded-lg',
      'focus:outline-none focus:bg-primary-500 focus:text-white',
      'active:bg-black active:text-white',
    ]
      .concat(isActive ? ['text-white bg-black dark:text-black dark:bg-white'] : ['text-primary-500'])
      .join(' ')
  }

  return (
    <nav>
      <ul className="font-semibold flex flex-col items-stretch">
        {pages.map(page => (
          <li key={page} className="px-6 py-1">
            <NavLink to={`/${kebabCase(page)}`} className={itemClasses}>{page}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}