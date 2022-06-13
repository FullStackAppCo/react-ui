import React, {ReactNode} from 'react'
import ExampleCode from "./ExampleCode";

interface ExampleProps {
  title: string,
  description?: ReactNode,
  variant?: string,
  code: string,
  example: ReactNode,
}

export default function Example({code, description, example, variant, title}: ExampleProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg flex items-center space-x-2">
        <span>{title}</span>
        {variant && <span className="translate-y-[1px] bg-primary-500 dark:bg-primary-800 text-white text-xs rounded-sm px-1 py-0.5 font-semibold">{variant}</span>}
      </h2>
      {description && <p>{description}</p>}
      <div className="border-gray-200 dark:border-gray-600 border p-6 rounded">{example}</div>
      <ExampleCode>{code}</ExampleCode>
    </div>
  )
}