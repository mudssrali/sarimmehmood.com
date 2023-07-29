import Head from 'next/head'
import { useEffect, useRef } from 'react'

import { Title } from '@/components/Title'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

import socialCardLarge from '@/images/social-card-large.jpg'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription ||
    meta.description ||
    'I’m Sarim, a product manager based in Lahore, Pakistan.'

  return (
    <>
      <Title suffix={router.pathname === '/' ? '' : 'Sarim Mehmood'}>
        {meta.metaTitle || meta.title}
      </Title>
      <Head>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content="@sarimmehmood" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://sarimmehmood.com${socialCardLarge.src}`}
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@sarimmehmood"
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://sarimmehmood.com${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://sarimmehmood.com${socialCardLarge.src}`}
        />
        <meta name="description" content={description} />
      </Head>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
