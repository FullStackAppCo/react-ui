import React, {ReactNode} from 'react'

interface ExamplePageProps {
  children: ReactNode,
  className?: string,
  title: string,
}

export default function ExamplePage({ title, className = '', children }: ExamplePageProps) {
  return (
    <div className="flex-grow px-10 space-y-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className={className}>{children}</div>
    </div>
  )
}