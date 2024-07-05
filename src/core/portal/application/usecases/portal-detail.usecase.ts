import { Injectable } from '@nestjs/common';
import { ClientPortfolioMsService } from 'src/core/external-ms/client-portfolio/services/client-portfolio-ms.service';
import { ClientMsService } from 'src/core/external-ms/client/services/client-ms.service';
import { CacheService } from 'src/infrastructure/cache/services/cache.service';
import { Portal } from '../../domain/models/portal.model';

@Injectable()
export class PortalDetailUseCase {
  constructor(
    private readonly clientMsService: ClientMsService,
    private readonly clientPortfolioMsService: ClientPortfolioMsService,
    private readonly cacheService: CacheService,
  ) {}

  async execute(clientId: string): Promise<Portal> {
    const portalCached = await this.cacheService.get(clientId);
    if (portalCached) return JSON.parse(portalCached);

    const client = await this.clientMsService.getById(clientId);
    const clientPortfolio = await this.clientPortfolioMsService.getById(
      client.idPortfolio,
    );

    const portal: Portal = {
      ...client,
      portfolio: {
        ...clientPortfolio,
        items: clientPortfolio.items,
      },
    };

    await this.cacheService.set(clientId, JSON.stringify(portal), 300);

    return portal;
  }
}
