import React from 'react'
import {IconHeading, Legal} from "../../dist";
import Example from "../components/Example";
import {faBarChart} from '@fortawesome/free-regular-svg-icons'
import ExamplePage from "./ExamplePage";
import GradientText from "../../src/type/GradientText";
import Heading from "../../src/type/Heading";

export default function Type() {
  return (
    <ExamplePage title="Type" className="space-y-10">
      <Example
        title="Heading"
        description="Heading Rendered in the display font. No text sizing class is applied so that you may abstract your own specific heading types if you wish. Defaults to <h2> use the level prop to override the semantic level."
        code={[
          `<Heading>Heading Text</Heading>`,
          `<Heading level={3}>Heading Text</Heading>`,
        ].join('\n')}
        example={
          <>
            <Heading>Default Heading</Heading>
            <Heading level={3}>Default Heading</Heading>
          </>
        }
      />
      <Example
        title="Icon Heading"
        description="Heading with an icon at the leading edge making it easier to scan when there are a number of headings in succession. For example in the page footer."
        code={[
          "import { faBarChart } from '@fortawesome/free-regular-svg-icons'",
          '',
          '<IconHeading icon={faBarChart}>Statistics</IconHeading>'
        ].join('\n')}
        example={<IconHeading icon={faBarChart}>Statistics</IconHeading>}
      />
      <Example
        title="Gradient Text"
        code={`<GradientText className="text-2xl font-bold">I'm text styled with a gradient</GradientText>`}
        example={<GradientText className="text-2xl font-bold">I'm text styled with a gradient</GradientText>}
      />
      <LegalBaseExample />
      <LegalMultiLineExample />
    </ExamplePage>
  )
}

function LegalBaseExample() {
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

function LegalMultiLineExample() {
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