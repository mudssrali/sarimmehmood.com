import logoLabs from '@/images/logos/labs.png'
import logoI2cInc from '@/images/logos/i2c.svg'

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
    }
}