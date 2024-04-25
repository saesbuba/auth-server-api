import { Test, TestingModule } from '@nestjs/testing';
import { AuthServerService } from './auth.service';

describe('AuthServerService', () => {
  let service: AuthServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthServerService],
    }).compile();

    service = module.get<AuthServerService>(AuthServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
