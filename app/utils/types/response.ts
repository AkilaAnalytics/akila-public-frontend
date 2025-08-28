/***************************************************
  RETURN TYPE
 **************************************************/
interface BaseResponse {
  title?: string;
  message?: string;
  source?: string;
}
export interface ISuccessResponse<T> extends BaseResponse {
  ok: true;
  data: T;
}

export interface IErrorResponse extends BaseResponse {
  ok: false; // note this
  error?: unknown;
}

export type IResponse<T> = ISuccessResponse<T> | IErrorResponse;
