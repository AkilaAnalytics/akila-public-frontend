import { Prisma, PrismaClient } from "./generated/client";
import logger from "./logger.server";

// NOTE: Due to hot reloading and Fast Refresh in development, your files can be reloaded multiple times
//   - Each reload would normally create a new PrismaClient instance
//   - Too many PrismaClient instances can lead to exceeding the database connection limit
// See here:
// https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162
// Add this before your code
declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;
console.log(process.env.DB_URL, "<<< DB_URL from prisma.server");

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

type PrismaErrorCode = "P2002" | "P2005";
type PrismaError = Record<PrismaErrorCode, { title: string; details: string }>;
const prismaErrorConfigs: PrismaError = {
  P2002: {
    title: "Error",
    details: "This job is not unique. Please create a unique job.",
  },
  P2005: {
    title: "Error",
    details: "The specified record does not exist.",
  },
};

export const handlePrismaErrors = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    logger.log({ code: e.code, source: "handlePrismaErrors" });
    return prismaErrorConfigs[e.code as PrismaErrorCode] || null;
  } else {
    return null;
  }
};

export default prisma;
