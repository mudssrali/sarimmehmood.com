import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Here’s a big list of all of my favorite stuff that I use to build, design, document a software, to share something in the community and stay productive."
      >
        <div className="space-y-20">
        </div>
      </SimpleLayout>
    </>
  )
}

Uses.layoutProps = {
  meta: {
    title: 'Uses',
    description:
      'Software I use, gadgets I love, and other things I recommend.',
  },
}
