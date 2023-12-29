import { SimpleLayout } from '@/components/SimpleLayout'

export default function Templates() {
  return (
    <SimpleLayout
      title="Some of my work"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    >
      <WorkTemplates />
    </SimpleLayout>
  )
}

const templates = [
  {
    id: 1,
    name: 'Example 1',
    caption: 'Sarim Mehmood CV',
    href: '/sarim_mehmood_cv.pdf',
    imageSrc:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Example 2',
    caption: 'Work on Healthcare',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Example 3',
    caption: 'Work on Agriculture',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
