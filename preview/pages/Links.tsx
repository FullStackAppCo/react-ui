import React from 'react'
import Example from "../components/Example";
import {ExternalLink} from "../../src";
import ExamplePage from "./ExamplePage";

export default function Links() {
  return (
    <ExamplePage title="Links" className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <Example
        title="External Link"
        code={`<ExternalLink href="https://example.com">Visit site</ExternalLink>`}
        example={<ExternalLink href="https://example.com">Visit site</ExternalLink>}
      />
    </ExamplePage>
  )
}