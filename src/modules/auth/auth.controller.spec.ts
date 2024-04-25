import { Test, TestingModule } from '@nestjs/testing';
import { AuthServerController } from './auth.controller';
import { AuthServerService } from './auth.service';

describe('AuthServerController', () => {
  let controller: AuthServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthServerController],
      providers: [AuthServerService],
    }).compile();

    controller = module.get<AuthServerController>(AuthServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
