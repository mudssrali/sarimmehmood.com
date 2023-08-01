import logoLabs from '@/images/logos/labs.png'
import logoI2cInc from '@/images/logos/i2c.svg'

import logoPxD from '@/images/logos/pxd.svg'
import logoIlmx from '@/images/logos/ilmx.png'
import logoMISchool from '@/images/logos/mischool.ico'

export const siteConfig = {
    name: "Sarim Mehmood",
    nameShort: "Sarim",
    designation: "Product Manager",
    description: "My name is Sarim Mehmood and I am a product management professional based in Pakistan.",
    descriptionShort: "I’m Sarim, a product manager based in Lahore, Pakistan.",
    email: "sarimmehmood1@gmail.com",
    socialLinks: {
        x: "https://x.com/sarimmehmood",
        linkedIn: "https://linkedin.com/in/sarimmehmood1",
        github: "https://github.com/sarimmehmood",
        instagram: "https://instagram.com/sarimmehmood"
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

            In partnership with the Climate Forecast Applications Network, a customized mobile- based weather advisory and forecast system was developed which is accessible to 5 million farmers of Punjab.Farmers in 36 districts receive regular advisory about upcoming weather patterns and farming advice such as seeding periods, pest management, and floodwater diversion.Microsoft’s Text to Speech conversion services are used to generate audio messages which are then broadcasted through Telenor APIs to individual farmers.Comprehensive metrics are used to generate engagement trends and to increase outreach efficacy. 

            * Current Daily Impact *: 880, 172 farmers, 20 treatment arms, and 40 campaigns
            

            link: { href: 'https://precisiondev.org', label: 'precisiondev.org' },
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