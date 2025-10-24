import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SusbscriptionsService } from './susbscriptions.service';
import { CreateSusbscriptionDto } from './dto/create-susbscription.dto';
import { UpdateSusbscriptionDto } from './dto/update-susbscription.dto';

@Controller('susbscriptions')
export class SusbscriptionsController {
  constructor(private readonly susbscriptionsService: SusbscriptionsService) {}

  @Post()
  create(@Body() createSusbscriptionDto: CreateSusbscriptionDto) {
    return this.susbscriptionsService.create(createSusbscriptionDto);
  }

  @Get()
  findAll() {
    return this.susbscriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.susbscriptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSusbscriptionDto: UpdateSusbscriptionDto) {
    return this.susbscriptionsService.update(+id, updateSusbscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.susbscriptionsService.remove(+id);
  }
}
