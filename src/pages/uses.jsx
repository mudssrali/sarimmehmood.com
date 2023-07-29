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
          <ToolsSection title="Workstation">
            <Tool title="16” Intel-based Lenovo E580, 16GB RAM (2018)">
              It’s been more than 3 years now, I’m using Levono E580. I didn’t
              feel any issue with it, even works well under the incredibly heavy
              loads. It’s just rock solid. Also thinking to try out Macbook M1,
              this year.
            </Tool>
            <Tool title="HP 24f 24-inch (FHD) Display">
              The only display I tried working with, and it works fine.
              Light-weight, with adjustable height.
            </Tool>
            <Tool title="4tech G3-200N Wireless Mouse">
              Something about all the gestures makes me feel like a wizard with
              special powers. This mouse still alive even falling thousands of
              time from the desk. It feels like imortal.
            </Tool>
            <Tool title="Unknown - Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS-Code">
              Visual Studio Code is a streamlined code editor with support for
              development operations like debugging, task running, and version
              control. It’s powerful beast, with all features. Loving and using
              it for past 4 years.
            </Tool>
            <Tool title="ZSH">
              Replaced bash with customized zsh using oh-my-zsh, and that’s just
              amazing powerful shell for Ubuntu. Obviously, it remembers things
              for me that I work with everyday.
            </Tool>
            <Tool title="Docker">
              Helps me to run Postgres locally or accessing from remote
              connection either with proxy or docker host. Also pretty awesome
              when accessing, debugging images running on remtoe VM.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Started using Figma as just a design tool but now it’s become our
              virtual whiteboard. Never would have expected the collaboration
              features to be the real hook.
            </Tool>
            <Tool title="Pixlr X">
              Simple, intuitive and free web tool that helps me with designing
              posts for LinkedIn, Twitter or Insta and from croping images to
              exporting them in various formats.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Helps me to document what builds a knowledge base from technical
              to non-technical aspects of the projects.
            </Tool>
            <Tool title="Google Keep Notes">
              Notes taking buddy on the internet - works best when online or
              off-line.
            </Tool>
            <Tool title="Notebook">
              Thanks to my friend, Attefaq who gifted me a notebook. It helps me
              to jot my activities down for the whole week with black ink.
            </Tool>
          </ToolsSection>
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
