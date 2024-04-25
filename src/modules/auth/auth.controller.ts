import {
  Controller,
  Post,
  Body,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/log-in.dto';
import { HttpResponse } from '../http-response/http-response.schema';

@Controller()
export class AuthController {
  private httpResponse: HttpResponse<undefined> = {
    statusCode: HttpStatus.OK,
    success: true,
    data: [],
  };

  constructor(private readonly authServerService: AuthService) {}

  @Post('/login')
  async logIn(@Body() logInDto: LogInDto) {
    const logInResponse = await this.authServerService
      .logIn(logInDto)
      .catch((error) => {
        throw new InternalServerErrorException({
          ...this.httpResponse,
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          success: false,
          message: error.message,
          data: {},
        });
      });

    if (typeof logInResponse === 'string') {
      return {
        ...this.httpResponse,
        message: logInResponse,
        statusCode: HttpStatus.NO_CONTENT,
        data: {},
      };
    }

    return {
      ...this.httpResponse,
      data: logInResponse,
    };
  }
}
