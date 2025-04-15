import { StatusCode } from "./status-code.enum";

export interface BaseResponse<T = undefined> {
  statusCode: StatusCode;
  description: string;
  data?: T;
}
