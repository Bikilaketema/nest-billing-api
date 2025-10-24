import { Module } from '@nestjs/common';
import { SusbscriptionsService } from './susbscriptions.service';
import { SusbscriptionsController } from './susbscriptions.controller';

@Module({
  controllers: [SusbscriptionsController],
  providers: [SusbscriptionsService],
})
export class SusbscriptionsModule {}
