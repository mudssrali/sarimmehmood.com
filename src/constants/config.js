import logoLabs from '@/images/logos/labs.png'
import logoI2cInc from '@/images/logos/i2c.svg'

import logoPxD from '@/images/logos/pxd.svg'
import logoIlmx from '@/images/logos/ilmx.png'
import logoMISchool from '@/images/logos/mischool.ico'

export const siteConfig = {
    name: "Sarim Mehmood",
    nameShort: "Sarim",
    designation: "Product Manager",
    description: "I’m Sarim, a product manager based in Lahore, Pakistan. I work at CERP where we develop technologies that empower regular people to bolster economic issues and inequalities.",
    email: "sarimmehmood1@gmail.com",
    socialLinks: {
        linkedIn: "https://linkedin.com/in/sarimmehmood1",
        github: "https://github.com/sarimmehmood"
    },
    resume: {
        experience: [
            {
                company: 'CERP Labs',
                title: 'Product Manager',
                logo: logoLabs,
                start: '2021',
                end: {
                    label: 'Present',
                    dateTime: new Date().getFullYear(),
                },
            },
            {
                company: 'i2c Inc.',
                title: 'Global Product Management',
                logo: logoI2cInc,
                start: '2019',
                end: '2021',
            },
        ],
        link: "https://sarimmehmood.notion.site/sarimmehmood/Hello-f470b1fc487b4a4088b472cae74817bd"
    },
    projects: [

        {
            name: 'PxD: Weather Advisory Tool',
            description:

                'A web-based weather advisory and forecast system to provide custom advisories about weather patterns and farming advice. The platform was capable of launching text campaigns and generating automated calls in multiple local languages using Text to Speech conversion services.',

            link: { href: '/blog/pxd-weather-advisory', label: 'Read more' },

            logo: logoPxD,
        },
        {
            name: 'MISchool',
            description:
                'School Management software application is designed  to transform operations and management processes and targets low-cost private, primary and secondary government schools in Pakistan.',
            link: { href: 'https://mischool.pk', label: 'mischool.pk' },
            logo: logoMISchool,
        },
        {
            name: 'IlmExchange',
            description:
                'Ilm Exchange is a digital education platform that connects schools, teachers and students with affordable resources to enable quality teaching and learning across Pakistan.',
            link: { href: '#', label: 'ilmexchange.com' },
            logo: logoIlmx,
        }
    ]
}