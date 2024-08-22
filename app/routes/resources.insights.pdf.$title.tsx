// app/routes/pdf/$filename.tsx
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "~/utils/server/index.server";
import { logger } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
  logger.log(params, "<<< params");
  let { title } = params;
  title = title!.toLowerCase().replace(/ /g, "-");
  const key = `_blog/${title}/${title}.pdf`;
  const bucketParams = {
    Bucket: process.env.STATIC_BUCKET,
    Key: key,
  };

  const command = new GetObjectCommand(bucketParams);
  const response = await s3Client.send(command);
  const pdfBuffer = await response.Body?.transformToByteArray();
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${params.title}"`,
      "Cache-Control": "public, max-age=86400", // Cache for 1 day (86400 seconds)
    },
  });
};
