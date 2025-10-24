import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePlanDto {
  @ApiProperty({
    description: 'The name of the subscription plan',
    example: 'Pro Plan',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'The monthly price of the plan',
    example: 29.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'A list of features included in the plan',
    example: ['Feature 1', 'Feature 2', 'Unlimited Access'],
  })
  @IsArray()
  @IsString({ each: true })
  features: string[];
}

