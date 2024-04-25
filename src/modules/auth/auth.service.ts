import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/log-in.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(logInDto: LogInDto) {
    const { username, password } = logInDto;

    const user = await this.userService.findOne(username).catch((error) => {
      throw new Error('Error when trying to get user');
    });

    if (!user) return 'No users found that matched the search criteria';

    const isPasswordMatching = await bcrypt.compare(password, user?.password);

    if (!isPasswordMatching)
      return 'The password provided does not match the password stored in the system';

    const jwtPayload = {
      sub: user._id.toString(),
      username: user.username,
    };

    const jwt = await this.jwtService.signAsync(jwtPayload);
    return {
      accessToken: jwt,
      tokenType: 'Bearer',
    };
  }
}
