import React from 'react'
import ExamplePage from "./ExamplePage";

export default function Color() {
  const primary = [
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
    'bg-primary-400',
    'bg-primary-500',
    'bg-primary-600',
    'bg-primary-700',
    'bg-primary-800',
    'bg-primary-900',
  ]
  return (
    <ExamplePage title="Color" className="space-y-10">
      <h2>Primary</h2>
      <p>Add </p>
      <div className="flex items-center gap-3">
        {primary.map(color => <Swatch color={color} name={color.split('-')[2]} />)}
      </div>
    </ExamplePage>
  )
}

interface SwatchProps {
  color: string,
  name: string,
}

function Swatch({ color, name }: SwatchProps) {
  return (
    <div className={`${color} w-20 h-20 shadow flex items-center justify-center`}>
      <span className="font-mono text-black">{name}</span>
    </div>
  )
}