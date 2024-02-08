import { S3Client } from '@aws-sdk/client-s3' // ES Modules import
import { SESClient } from '@aws-sdk/client-ses'

const isProd = process.env.NODE_ENV === 'production'

const prodCredentials = {
  region: process.env.AWS_REGION!
}

const devCredentials = {
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!
  }
}

const config = isProd ? prodCredentials : devCredentials

const s3Client = new S3Client(config)
const sesClient = new SESClient(config)
export { s3Client, sesClient }
