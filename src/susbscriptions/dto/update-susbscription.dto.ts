import { PartialType } from '@nestjs/swagger';
import { CreateSusbscriptionDto } from './create-susbscription.dto';

export class UpdateSusbscriptionDto extends PartialType(CreateSusbscriptionDto) {}
