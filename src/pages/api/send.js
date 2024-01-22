import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
        });

        if (error) {
            res.status(400).json({ error });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ error });
    }
}