import { json } from '@remix-run/node'
import type { ActionFunctionArgs } from '@remix-run/node'

import { sendEmail } from '~/api/emails/index.server'

function sanitizeString(input: string) {
  // Use a basic method to sanitize: strip out any non-alphanumeric characters, except for spaces.
  // This will not be enough for fields like email, so specific sanitization should be done for them.
  return input.replace(/[^a-z0-9 ]/gi, '')
}

function sanitizePhone(phone: string) {
  // Remove any non-numeric characters
  return phone.replace(/\D/g, '')
}

function sanitizeEmail(input: string) {
  // A very basic validation and sanitization:
  // 1. Trim spaces.
  // 2. Convert to lowercase.
  // 3. Ensure it contains an "@" and a "." character.
  const trimmed = input.trim().toLowerCase()
  if (trimmed.includes('@') && trimmed.includes('.')) {
    return trimmed
  } else {
    throw new Error('Invalid email format')
  }
}

export async function action({
  request
}: ActionFunctionArgs): Promise<Response> {
  try {
    // parse request
    const body = await request.formData()
    const [
      firstName,
      lastName,
      email,
      message,
      source,
      phone,
      jobTitle,
      company
    ] = [
      'firstName',
      'lastName',
      'email',
      'message',
      'source',
      'phone',
      'jobTitle',
      'company'
    ].map((field) => {
      const rawValue = body.get(field) as string
      if (field === 'email') {
        return sanitizeEmail(rawValue)
      } else if (field === 'phone') {
        return sanitizePhone(rawValue)
      } else {
        return sanitizeString(rawValue)
      }
    })

    // send email
    await sendEmail({
      firstName,
      lastName,
      email,
      message,
      source,
      phone,
      jobTitle,
      company
    })
    return json({
      ok: true
    })
  } catch (e) {
    console.log(e, '<<< e from contact-us')
    return json({
      ok: false
    })
  }
}
