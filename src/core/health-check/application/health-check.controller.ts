import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheckResponseDto } from '../domain/health-check.response.dto';
import { HealthCheckService } from './health-check.service';

@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return OK if the service is running',
    type: HealthCheckResponseDto,
  })
  getHealthCheck(): HealthCheckResponseDto {
    return this.healthCheckService.getHealthCheck();
  }
}
