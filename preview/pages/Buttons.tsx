import React from 'react'
import {PrimaryButton} from "../../src";
import Example from "../components/Example";
import ExamplePage from "./ExamplePage";

export default function Buttons() {
  return (
    <ExamplePage title="Buttons" className="space-y-10">
      <Example
        title="Primary Button"
        code={`<PrimaryButton>Submit</PrimaryButton>`}
        example={<PrimaryButton>Submit</PrimaryButton>}
      />
      <Example
        title="Primary Button"
        variant="disabled"
        code={`<PrimaryButton disabled>Submit</PrimaryButton>`}
        example={<PrimaryButton disabled>Submit</PrimaryButton>}
      />
      <Example title="Link as Button" code={`<PrimaryButton
  tag="a"
  href="https://example.com"
  target="_blank"
>Press</PrimaryButton>`}
        example={<PrimaryButton tag="a" href="https://example.com" target="_blank">Press</PrimaryButton>}
      />
      <Example
        title="Large Primary Button"
        code={`<PrimaryButton size="lg">Submit</PrimaryButton>`}
        example={<PrimaryButton size="lg">Submit</PrimaryButton>}
      />
    </ExamplePage>
  )
}