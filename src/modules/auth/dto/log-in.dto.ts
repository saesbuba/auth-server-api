import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class LogInDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
