import { Module } from '@nestjs/common';
import { ClientMsService } from './client/services/client-ms.service';
import { ClientPortfolioMsService } from './client-portfolio/services/client-portfolio-ms.service';
import { HttpClientModule } from 'src/infrastructure/http/http.module';

@Module({
  imports: [HttpClientModule],
  providers: [ClientMsService, ClientPortfolioMsService],
  exports: [ClientMsService, ClientPortfolioMsService],
})
export class ExternalMsModule {}
