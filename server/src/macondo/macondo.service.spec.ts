import { Test, TestingModule } from '@nestjs/testing';
import { MacondoService } from './macondo.service';

describe('MacondoService', () => {
  let service: MacondoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacondoService],
    }).compile();

    service = module.get<MacondoService>(MacondoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
