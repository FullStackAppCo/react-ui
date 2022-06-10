import React from 'react'
import {IconHeading, Legal} from "../../../src";
import Example from "../components/Example";
import {faBarChart} from '@fortawesome/free-regular-svg-icons'

export default function Type() {
  return (
    <div className="space-y-10">
      <Example
        title="Icon Heading"
        code={[
          "import { faBarChart } from '@fortawesome/free-regular-svg-icons'",
          '',
          '<IconHeading icon={faBarChart}>Statistics</IconHeading>'
        ].join('\n')}
        example={<IconHeading icon={faBarChart}>Statistics</IconHeading>}
      />
      <FooterBaseExample />
      <FooterMultiLineExample />
    </div>
  )
}

function FooterBaseExample() {
  const code = ["<FooterLegal>"].concat([
    'ED209 copyright &copy; Omni Consumer Products {new Date().getFullYear()} all rights reserved.',
  ].map(line => "\t" + line).join("\n")).concat("</FooterLegal>").join("\n")

  const content = (
    <Legal>
      ED209 copyright &copy; Omni Consumer Products {new Date().getFullYear()} all rights reserved.
      'OCP is a company in Delta City, Michigan.'
    </Legal>
  )

  return (
    <Example
      title="Legal"
      code={code}
      example={content}
    />
  )
}

function FooterMultiLineExample() {
  const code = ["<FooterLegal lines={["].concat([
    '<>ED209 copyright &copy; Omni Consumer Products {new Date().getFullYear()} all rights reserved.</>',
    '\'OCP is a company in Delta City, Michigan.\''
  ].map(line => "\t" + `${line},`).join("\n")).concat("]} />").join("\n")

  const content = (
    <Legal lines={[
      <>ED209 copyright &copy; Omni Consumer Products {new Date().getFullYear()} all rights reserved.</>,
      'OCP is a company in Delta City, Michigan.'
    ]} />
  )

  return (
    <Example
      title="Legal"
      variant="multi-line"
      code={code}
      example={content}
    />
  )
}