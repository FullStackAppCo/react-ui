import * as React from 'react'
import {ReactNode} from "react";

interface ExampleProps {
  title: string,
  state: string,
  code: string,
  example: ReactNode,
}

export default function Example({code, example, state, title}: ExampleProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg flex items-center space-x-2">
        <span>{title}</span>
        {state && <span className="translate-y-[1px] bg-primary-500 text-white text-xs rounded-sm px-1 py-0.5 font-semibold">{state}</span>}
      </h2>
      <div>{example}</div>
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded px-2 py-1 border-gray-200 dark:border-gray-700 border text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}