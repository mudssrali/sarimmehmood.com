import { SimpleLayout } from '@/components/SimpleLayout'

export default function Templates() {
  return (
    <SimpleLayout
      title="Templates For My Product Work"
      intro="From requirement gathering to building test cases, these are a few documents I use frequently to build intuitive and scalable products. Use them well!"
    >
      <WorkTemplates />
    </SimpleLayout>
  )
}

const templates = [
  {
    id: 1,
    name: 'Product Requirement Document',
    caption: 'Wrangle ten thousand ideas into one coherent document.',
    href: '/product_requirement_document.pdf',
    imageSrc: '/prd.jpg',
    imageAlt: 'Product Requirement Gathering',
  },
  {
    id: 2,
    name: 'Target Market Analysis',
    caption: 'Find out what the playground is like before you set shop.',
    href: '/target_market_analysis.pdf',
    imageSrc: '/target_market.jpg',
    imageAlt: 'Target Market Analysis'
  },
]

export function WorkTemplates() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {templates.map((t) => (
          <div key={t.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.imageSrc}
                  alt={t.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{t.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{t.caption}</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
              </div>
            </div>
            <div className="mt-6">
              <a
                href={t.href}
                download
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Download<span className="sr-only">, {t.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
