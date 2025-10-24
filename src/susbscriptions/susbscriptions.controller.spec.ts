import { Test, TestingModule } from '@nestjs/testing';
import { SusbscriptionsController } from './susbscriptions.controller';
import { SusbscriptionsService } from './susbscriptions.service';

describe('SusbscriptionsController', () => {
  let controller: SusbscriptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SusbscriptionsController],
      providers: [SusbscriptionsService],
    }).compile();

    controller = module.get<SusbscriptionsController>(SusbscriptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
