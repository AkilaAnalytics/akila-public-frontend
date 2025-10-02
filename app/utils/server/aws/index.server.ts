import { fromIni } from "@aws-sdk/credential-providers";
import { S3Client } from "@aws-sdk/client-s3";
import { SESClient } from "@aws-sdk/client-ses";
import logger from "../logger.server";

// Use ini profile only if AWS_PROFILE is explicitly set (for local development)
// Otherwise, let AWS SDK auto-discover credentials (works for EC2 IAM roles)
const config = {
  region: process.env.AWS_REGION || "us-east-1",
  ...(process.env.AWS_PROFILE && {
    credentials: fromIni({ profile: process.env.AWS_PROFILE }),
  }),
};
logger.log({ config, source: "server/aws/index.server" });

const s3Client = new S3Client(config);
const sesClient = new SESClient(config);
export { s3Client, sesClient };
