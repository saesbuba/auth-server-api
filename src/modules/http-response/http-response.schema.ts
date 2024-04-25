import { HttpStatus } from '@nestjs/common';

export interface HttpResponse<T> {
  success: boolean;
  statusCode: HttpStatus;
  data: Array<T> | T;
  message?: any;
  details?: any;
}
