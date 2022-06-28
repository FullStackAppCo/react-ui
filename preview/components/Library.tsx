import React from 'react'
import Nav from './Nav'
import {Routes, Route} from "react-router-dom";
import Buttons from '../pages/Buttons'
import Links from '../pages/Links'
import Type from '../pages/Type'
import {ExternalLink, Legal} from "../../src";
import LayoutIndicator from "./LayoutIndicator";
import Color from "../pages/Color";

export default function Library()
{
  const pages = {
    'color': <Color />,
    'buttons': <Buttons />,
    'links': <Links />,
    'type': <Type />
  }

  return (
    <div className="fixed w-screen h-screen flex flex-col">
      <LayoutIndicator className="mx-auto" />
      <div className="overflow-hidden flex-grow flex flex-col lg:flex-row items-stretch justify-start divide-gray-100 dark:divide-gray-700 divide-y lg:divide-y-0 lg:divide-x">

        <header className="flex flex-col flex-grow-0 flex-shrink-0 min-w-[15vw] overflow-scroll">
          <a href="#content" className="overflow-hidden h-0 py-0 focus:py-1 focus:h-auto block text-center bg-focus-500 text-black font-bold focus:outline-none">Skip to content</a>
          <div className="mx-4 py-3 lg:py-6">
            <Nav pages={Object.keys(pages)} />
          </div>
        </header>

        <div className="flex flex-col flex-grow py-6 overflow-scroll">
          <main id="content">
            <Routes>
              <Route path="/" element={<Buttons />}/>
              {Object.entries(pages).map(entry => {
                const [path, component] = entry
                return <Route key={path} path={`/${path}`} element={component}/>
              })}
            </Routes>
          </main>
          <footer className="flex-grow-0">
            <Legal className="px-10 pt-16 pb-6 text-center">
                <span className="space-x-1">
                  <span>Copyright &copy; {new Date().getFullYear()}</span>
                  <ExternalLink href='https://fullstackapp.co'>Full Stack App Co.</ExternalLink>
                  <span>Open sourced under the</span>
                  <ExternalLink href="https://opensource.org/licenses/MIT">MIT License</ExternalLink>
                </span>
            </Legal>
          </footer>
        </div>
      </div>
  </div>
  )
}