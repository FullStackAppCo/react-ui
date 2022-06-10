import * as React from "react";
import {ReactNode} from "react";

interface ExampleCodeProps {
  children: ReactNode,
}

export default function ExampleCode({ children }: ExampleCodeProps) {
  const borderColor = 'border-gray-200 dark:border-gray-700'

  return (
    <div className={`overflow-hidden bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded ${borderColor} border text-sm`}>
      <h3 className="sr-only">Code examples</h3>
      <h4 className={`font-semibold px-3 p-1 bg-gray-200 dark:bg-gray-700 bg-opacity-50 tracking-wider text-xs ${borderColor} border-b`}>JSX</h4>
      <pre className="px-3 py-2 overflow-scroll">
        <code>{children}</code>
      </pre>
    </div>
  )
}
