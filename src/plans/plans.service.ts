import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
  ) {}

  async createPlan(createPlanDto: CreatePlanDto): Promise<Plan> {
    const newPlan = this.planRepository.create(createPlanDto);
    return this.planRepository.save(newPlan);
  }

  async findAllPlans(): Promise<Plan[]> {
    return this.planRepository.find();
  }

  async findPlanById(id: string): Promise<Plan | null> {
    return this.planRepository.findOneBy({ id });
  }
}
