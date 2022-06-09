import React from 'react'
import {PrimaryButton} from "../../../src";
import Example from "../components/Example";

export default function Buttons() {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <Example
        title="Primary Button"
        code={`<PrimaryButton>Submit</PrimaryButton>`}
        example={<PrimaryButton>Submit</PrimaryButton>}
      />
      <Example
        title="Primary Button"
        state="disabled"
        code={`<PrimaryButton disabled>Submit</PrimaryButton>`}
        example={<PrimaryButton disabled>Submit</PrimaryButton>}
      />
      <Example
        title="Large Primary Button"
        code={`<PrimaryButton size="lg">Submit</PrimaryButton>`}
        example={<PrimaryButton size="lg">Submit</PrimaryButton>}
      />
    </div>
  )
}