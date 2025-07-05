import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { s3Client } from '~/utils/server/index.server'
import { Readable } from 'stream'
import { logger } from '~/utils'

function streamToString(stream: Readable): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    stream.on('data', (chunk: Buffer) => chunks.push(chunk))
    stream.on('error', reject)
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  })
}

export async function getFile(bucket: string, key: string) {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key })
  const response = await s3Client.send(command)
  return streamToString(response.Body) // Convert the stream to a string
}

export async function putFile(bucket: string, key: string, body: string) {
  try {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body
    })
    await s3Client.send(command)
    return true
  } catch (e) {
    console.log(e, '<<< e from putFile')
    return false
  }
}
