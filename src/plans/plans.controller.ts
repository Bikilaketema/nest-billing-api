import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from './entities/plan.entity';
import { PlansService } from './plans.service';

@ApiTags('Plans')
@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List all available subscription plans' })
  @ApiResponse({
    status: 200,
    description: 'A list of plans',
    type: [Plan],
  })
  async findAllPlans(): Promise<Plan[]> {
    return this.plansService.findAllPlans();
  }

  @Post()
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'Create a new subscription plan (Protected)' })
  @ApiBody({ type: CreatePlanDto })
  @ApiResponse({
    status: 201,
    description: 'The newly created plan',
    type: Plan,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createPlan(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
    return this.plansService.createPlan(createPlanDto);
  }
}
