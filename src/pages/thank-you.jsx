import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <SimpleLayout
        title="Thank you for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}

ThankYou.layoutProps = {
  meta: {
    title: 'You’re subscribed',
    description: 'Thank you for subscribing to my newsletter.',
  },
}
