import { Module } from '@nestjs/common';
import { HealthCheckController } from './application/health-check.controller';
import { HealthCheckService } from './application/health-check.service';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
