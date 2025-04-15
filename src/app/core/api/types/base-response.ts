import { StatusCode } from "./status-code.enum";

export interface BaseResponse {
  statusCode: StatusCode;
  description: string;
}