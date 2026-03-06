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

// TODO: Add rate limiting before significant traffic (e.g., @upstash/ratelimit)
export async function POST(request) {
    try {
        const { email, taskDescription, videoLink } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // If API key is not set, just log it (for dev/demo purposes)
        if (!process.env.RESEND_API_KEY) {
            console.log('Waitlist Signup (Simulated):', { email, taskDescription, videoLink });
            return NextResponse.json({ success: true, message: 'Simulated signup successful' });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const notifyEmail = process.env.NOTIFY_EMAIL;
        if (!notifyEmail) {
            console.warn('NOTIFY_EMAIL is not set. Skipping email notification.');
            return NextResponse.json({ success: true, message: 'Signup recorded (email notification skipped)' });
        }

        // Sanitize user inputs before inserting into HTML
        const safeEmail = sanitizeHtml(email);
        const safeTaskDescription = taskDescription ? sanitizeHtml(taskDescription) : null;
        const safeVideoLink = videoLink ? sanitizeHtml(videoLink) : null;

        // Send email to the site owner
        let htmlContent = `<p>New user joined the waitlist: <strong>${safeEmail}</strong></p>`;

        if (safeTaskDescription) {
            htmlContent += `
                <h3>Automation Request</h3>
                <p><strong>Task Description:</strong><br/>${safeTaskDescription.replace(/\n/g, '<br/>')}</p>
            `;
        }

        if (safeVideoLink) {
            htmlContent += `<p><strong>Video Link:</strong> <a href="${safeVideoLink}">${safeVideoLink}</a></p>`;
        }

        await resend.emails.send({
            from: 'Nextis <r.gonzalez@nextis.tech>',
            to: notifyEmail,
            subject: taskDescription ? 'New Automation Request' : 'New Waitlist Signup',
            html: htmlContent
        });

        // Add to Resend Audience (Collection List)
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
        console.error('Waitlist error:', error);
        return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 });
    }
}
