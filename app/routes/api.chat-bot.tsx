import { SendEmailCommand } from '@aws-sdk/client-ses'
import { json } from '@remix-run/node'
import { sesClient } from '~/utils/server/index.server'

interface IProps {
  request: Request
}

export async function action({ request }: IProps) {
  try {
    const formData = await request.formData()
    const chatHistory = formData.get('chatHistory')

    // send email
    const params = {
      Destination: {
        ToAddresses: [process.env.SUPPORT_EMAIL!]
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: chatHistory + ' \n\nplatform: ChatBot from AkilaAnalytics.com'
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Received a Message from the ChatBot.`
        }
      },
      Source: process.env.SUPPORT_EMAIL
    }

    await sesClient.send(new SendEmailCommand(params))
    console.log('Successfully emailed message from ChatBot')
    return json({ ok: true })
  } catch (e) {
    console.log('There was an error sending the email from the chatbot', e)
    return json({ ok: false })
  }
}
