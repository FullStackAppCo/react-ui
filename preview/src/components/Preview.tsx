import * as React from 'react'
import Nav from './Nav'
import {useParams} from "react-router-dom"
import {startCase, camelCase, upperFirst} from 'lodash-es'
import Buttons from '../pages/Buttons'
import Links from '../pages/Links'
import Type from '../pages/Type'
import {ReactNode} from "react";

export default function Preview()
{
  const {page} = useParams()
  const pages = [
    'Buttons',
    'Links',
    'Type',
  ]

  function pageComponent(page: string): ReactNode {
    if (page === 'buttons') return <Buttons />
    if (page === 'links') return <Links />
    if (page === 'type') return <Type />
    return <Buttons />
  }

  return (
    <div className="h-full flex items-stretch justify-start divide-gray-100 dark:divide-gray-700 divide-x">
      <header className="flex-grow-0 min-w-[15vw] py-6">
        <Nav pages={pages} />
      </header>
      <main className="flex-grow py-6">
        <div className="px-10 space-y-4">
          <h1 className="font-bold text-3xl">{startCase(page)}</h1>
          {pageComponent(page)}
        </div>
      </main>
    </div>
  )
}