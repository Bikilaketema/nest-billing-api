import { Injectable } from '@nestjs/common';
import { CreateSusbscriptionDto } from './dto/create-susbscription.dto';
import { UpdateSusbscriptionDto } from './dto/update-susbscription.dto';

@Injectable()
export class SusbscriptionsService {
  create(createSusbscriptionDto: CreateSusbscriptionDto) {
    return 'This action adds a new susbscription';
  }

  findAll() {
    return `This action returns all susbscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} susbscription`;
  }

  update(id: number, updateSusbscriptionDto: UpdateSusbscriptionDto) {
    return `This action updates a #${id} susbscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} susbscription`;
  }
}
