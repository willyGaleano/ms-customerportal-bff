import { Module } from '@nestjs/common';
import { PortalResolver } from './infrastructure/resolvers/portal.resolver';
import { PortalDetailUseCase } from './application/usecases/portal-detail.usecase';
import { PortalService } from './application/services/portal.service';
import { ExternalMsModule } from '../external-ms/external-ms.module';
import { CacheModule } from '../../infrastructure/cache/cache.module';

@Module({
  imports: [ExternalMsModule, CacheModule],
  providers: [PortalService, PortalDetailUseCase, PortalResolver],
})
export class PortalModule {}
