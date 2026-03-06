import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function sanitizeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(request) {
    try {
        const { name, email, useCase, country } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        if (!process.env.RESEND_API_KEY) {
            console.log('Hardware Request (Simulated):', { name, email, useCase, country });
            return NextResponse.json({ success: true, message: 'Simulated request successful' });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const notifyEmail = process.env.NOTIFY_EMAIL;
        if (!notifyEmail) {
            console.warn('NOTIFY_EMAIL is not set. Skipping email notification.');
            return NextResponse.json({ success: true, message: 'Request recorded (email notification skipped)' });
        }

        const safeEmail = sanitizeHtml(email);
        const safeName = name ? sanitizeHtml(name) : null;
        const safeUseCase = useCase ? sanitizeHtml(useCase) : null;
        const safeCountry = country ? sanitizeHtml(country) : null;

        let htmlContent = `<p><strong>New hardware kit request</strong></p>`;
        htmlContent += `<p><strong>Email:</strong> ${safeEmail}</p>`;

        if (safeName) {
            htmlContent += `<p><strong>Name:</strong> ${safeName}</p>`;
        }

        if (safeUseCase) {
            htmlContent += `<p><strong>Use case:</strong><br/>${safeUseCase.replace(/\n/g, '<br/>')}</p>`;
        }

        if (safeCountry) {
            htmlContent += `<p><strong>Country:</strong> ${safeCountry}</p>`;
        }

        await resend.emails.send({
            from: 'Nextis <r.gonzalez@nextis.tech>',
            to: notifyEmail,
            subject: 'New Hardware Kit Request',
            html: htmlContent
        });

        if (process.env.RESEND_AUDIENCE_ID) {
            try {
                await resend.contacts.create({
                    email: email,
                    audienceId: process.env.RESEND_AUDIENCE_ID,
                });
            } catch (contactsError) {
                console.error('Failed to add to contacts:', contactsError);
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Hardware request error:', error);
        return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
    }
}
