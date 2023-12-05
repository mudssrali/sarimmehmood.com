import logoLabs from '@/images/logos/labs.png'
import logoI2cInc from '@/images/logos/i2c.svg'

import logoPxD from '@/images/logos/pxd.svg'
import logoIlmx from '@/images/logos/ilmx.png'
import logoMISchool from '@/images/logos/mischool.ico'
import logoInfantFeeding from '@/images/logos/if-logo.png'
import micarelogo from '@/images/logos/micarelogo.png'
import logoIAXServices from '@/images/logos/iaxservices.svg'

export const siteConfig = {
    name: "Sarim Mehmood",
    nameShort: "Sarim",
    designation: "Product enthusiast with a flair for all things technology",
    description: "I’m Sarim, a product manager based in Lahore, Pakistan. I work at CERP where we develop technologies that empower people to bolster economic issues and inequalities.",
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
                title: 'Editor - Global Product Management',
                logo: logoI2cInc,
                start: '2019',
                end: '2021',
            },
            {
                company: 'IAX Services.',
                title: 'Technical Writer',
                logo: logoIAXServices,
                start: '2019',
                end: '2021',
            },
        ],
        link: "/sarim_mehmood_cv.pdf"
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
            name: 'Infant Feeding',
            description:

                'A mobile application designed to empower Lady Health Workers (LHWs) in Pakistan to deliver reliable healthcare information and support to expecting and lactating mothers. It provides access to a vast video library, interactive quizzes, and essential check-up data management to allow LHWs to easily register patients, maintain detailed patient records, and apply integrated clinical algorithms for accurate diagnosis.',

            link: { href: '/blog/infant-feeding', label: 'Read more' },

            logo: logoInfantFeeding,
        },

        {
            name: 'MICare',
            description:

                'An offline first suite of applications designed to deliver nutritional and health products to expecting and lactating mothers. The platform manages patient profiles, sales and visit data, and generates comprehensive metrics for all involved stakeholders.',

            link: { href: '/blog/micare', label: 'Read more' },

            logo: micarelogo,
        },

        {
            name: 'MISchool',
            description:
                'School Management software application designed to transform operations and management processes and targets low-cost private, primary and secondary government schools in Pakistan.',
            link: { href: 'https://mischool.pk', label: 'mischool.pk' },
            logo: logoMISchool,
        }
    ]
}