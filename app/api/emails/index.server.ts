import { SendEmailCommand } from '@aws-sdk/client-ses'

import { sesClient } from '~/utils/server/index.server'

interface ISendEmailArgs {
  firstName: string
  lastName: string
  email: string
  message: string
  source: string
  phone?: string
  jobTitle?: string
  company?: string
}

export async function sendEmail(args: ISendEmailArgs) {
  const email = args['email']
  const fieldNames: (keyof ISendEmailArgs)[] = [
    'firstName',
    'lastName',
    'email',
    'message',
    'source',
    'phone',
    'jobTitle',
    'company'
  ]
  // create the message
  const messageText = fieldNames
    .map((fieldName: keyof ISendEmailArgs) => {
      if (args[fieldName]) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}: ${
          args[fieldName]
        }`
      }
      return null
    })
    .filter(Boolean)
    .join(' \n')

  const params = {
    Destination: {
      ToAddresses: [process.env.SUPPORT_EMAIL!]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: messageText + ' \nplatform: AkilaAnalytics.com'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Received a Message from Contact Us form. Message from: ${email}`
      }
    },
    Source: process.env.SUPPORT_EMAIL
  }

  await sesClient.send(new SendEmailCommand(params))
}
