import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "~/utils/server/index.server";
import { PassThrough } from "stream";
import { logger } from "~/utils";

export const action = async ({ req }) => {
  const params = {
    Bucket: process.env.STATIC_BUCKET,
    Key: "_blog/what-are-sql-databases/image.jpg",
  };
  logger.log(params, "<<< params");

  try {
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);

    // Create a readable stream
    const stream = response.Body.pipe(new PassThrough());

    // Set up headers for the image response
    return new Response(stream, {
      headers: {
        "Content-Type": response.ContentType, // Set content type based on the S3 object
        "Content-Length": response.ContentLength, // Set content length
        "Cache-Control": "public, max-age=0", // Cache for one year
      },
    });
  } catch (error) {
    console.error("Error retrieving image from S3:", error);
    return new Response("Error retrieving image", { status: 500 });
  }
};
