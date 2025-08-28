import { data } from "react-router";
import { Prisma } from "~/utils/server/generated/client";

import { logger } from "~/utils/server/index.server";
import type {
  IResponse,
  ISuccessResponse,
  IErrorResponse,
} from "~/utils/types";

export function response<T = object | null>(response: IResponse<T>) {
  if (response.ok) {
    const { ok, title, message, source } = response;
    const data_ = response.data;
    return data<ISuccessResponse<T>>(
      {
        ok,
        data: data_,
        title,
        message,
        source: source || "",
      },
      { status: 200 }
    );
  } else {
    const { ok, title, message, error, source } = response;
    logger.fatal({ ok, title, message, source });
    return processError({
      ok: false,
      error,
      message: message || "Unknown error",
      source: source || "",
    });
  }
}

function processError({ error, message, source }: IErrorResponse) {
  logger.fatal({
    stack: error instanceof Error ? error.stack : undefined,
    code:
      error instanceof Error && "code" in error
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (error as any).code
        : undefined,
    message,
    source,
  });

  /********************************* PRISMA *****************************/
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return data({
        ok: false,
        message:
          "That job is not unique. Please provide a unique name. If the issue persists, please contact your administrator.",
      });
    }
  }

  if (error instanceof Error) {
    return data({
      ok: false,
      title: "Error",
      message:
        message ||
        "There was an unknown error. Please contact support if the issue persists.",
    });
  } else {
    return data({
      ok: false,
      title: "Error",
      message:
        message ||
        "There was an unknown error. Please contact support if the issue persists.",
    });
  }
}
