import React from 'react'
import Example from "../components/Example";
import {ExternalLink} from "../../../src";

export default function Links() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Example
        title="External Link"
        code={`<ExternalLink href="https://example.com">Visit site</ExternalLink>`}
        example={<ExternalLink href="https://example.com">Visit site</ExternalLink>} />
    </div>
  )
}