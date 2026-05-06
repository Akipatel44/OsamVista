import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const MAX_TOTAL_SIZE = 4.5 * 1024 * 1024 // 4.5 MB in bytes
const MAX_IMAGES = 5

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string
    const files = formData.getAll('files') as File[]

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate file count
    if (files.length > MAX_IMAGES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_IMAGES} images allowed` },
        { status: 400 }
      )
    }

    // Validate total file size
    let totalSize = 0
    for (const file of files) {
      totalSize += file.size
    }

    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: 'Total file size exceeds 4.5 MB limit. For larger files, please send them directly via email.' },
        { status: 400 }
      )
    }

    // Prepare attachments
    const attachments: Array<{
      filename: string
      content: string
      contentType: string
    }> = []

    for (const file of files) {
      const buffer = await file.arrayBuffer()
      const base64Content = Buffer.from(buffer).toString('base64')
      attachments.push({
        filename: file.name,
        content: base64Content,
        contentType: file.type,
      })
    }

    // Professional HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
      .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
      .header h1 { margin: 0; font-size: 28px; }
      .content { background-color: white; padding: 40px; border-left: 4px solid #667eea; }
      .section { margin-bottom: 30px; }
      .section-title { color: #667eea; font-size: 16px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
      .section-content { color: #555; margin-bottom: 10px; }
      .info-row { display: flex; margin-bottom: 15px; }
      .info-label { font-weight: bold; color: #333; width: 120px; }
      .info-value { color: #666; flex: 1; word-break: break-word; }
      .message-box { background-color: #f0f4ff; border-left: 4px solid #667eea; padding: 15px; margin-top: 10px; border-radius: 4px; }
      .attachments { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
      .attachment-info { color: #666; font-size: 14px; }
      .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #888; border-radius: 0 0 8px 8px; }
      .footer a { color: #667eea; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>✉️ New Contact Form Submission</h1>
        <p>From Osam Hills Website</p>
      </div>
      
      <div class="content">
        <div class="section">
          <div class="section-title">Contact Information</div>
          <div class="info-row">
            <div class="info-label">Name:</div>
            <div class="info-value">${escapeHtml(name)}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
          </div>
          ${phone ? `
          <div class="info-row">
            <div class="info-label">Phone:</div>
            <div class="info-value">${escapeHtml(phone)}</div>
          </div>
          ` : ''}
        </div>

        <div class="section">
          <div class="section-title">Message</div>
          <div class="message-box">
            ${escapeHtml(message).replace(/\n/g, '<br>')}
          </div>
        </div>

        ${files.length > 0 ? `
        <div class="attachments">
          <div class="section-title">Attached Images</div>
          <div class="attachment-info">
            <strong>${files.length}</strong> image(s) uploaded by the user.
            <br>
            Files: ${files.map((f) => escapeHtml(f.name)).join(', ')}
          </div>
        </div>
        ` : ''}
      </div>

      <div class="footer">
        <p>This is an automated message from the Osam Hills contact form. Please do not reply to this email.</p>
        <p><a href="https://osamhills.com">Visit our website</a></p>
      </div>
    </div>
  </body>
</html>
    `.trim()

    // Send email to the admin
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'akshayshingala112@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate,
      attachments: attachments,
    })

    if (response.error) {
      console.error('Resend error:', response.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
