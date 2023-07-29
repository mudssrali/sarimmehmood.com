import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <SimpleLayout
        title="I haven’t spoken yet but there is something coming soon!"
        intro=""
      >
        {/* <div className="space-y-20">
          <SpeakingSection title="Conferences"></SpeakingSection>
          <SpeakingSection title="Podcasts"></SpeakingSection>
        </div> */}
      </SimpleLayout>
    </>
  )
}

Speaking.layoutProps = {
  meta: {
    title: 'Speaking',
    description: 'I haven’t spoken yet but there is something coming soon!',
  },
}

