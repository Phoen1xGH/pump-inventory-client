import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { BaseResponse } from "../api/types/base-response.data";
import { StatusCode } from "../api/types/status-code.enum";

export function handleResponse<T>(
  response: Observable<BaseResponse<T>>
  ): Observable<BaseResponse<T>> {
  return response.pipe(
    catchError(() => of({
      statusCode: StatusCode.InternalServerError,
      description: 'Ошибка запроса',
      data: undefined
    }))
  );
}
