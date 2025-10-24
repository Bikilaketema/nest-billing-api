import { Test, TestingModule } from '@nestjs/testing';
import { SusbscriptionsService } from './susbscriptions.service';

describe('SusbscriptionsService', () => {
  let service: SusbscriptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SusbscriptionsService],
    }).compile();

    service = module.get<SusbscriptionsService>(SusbscriptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
