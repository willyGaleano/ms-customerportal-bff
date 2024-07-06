import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ClientPortfolioMsService } from '../../../../core/external-ms/client-portfolio/services/client-portfolio-ms.service';
import { ClientMsService } from '../../../../core/external-ms/client/services/client-ms.service';
import { CacheService } from '../../../../infrastructure/cache/services/cache.service';
import { Portal } from '../../domain/models/portal.model';
import { EnvironmentVariables } from '../../../../infrastructure/settings/env-vars/env-vars.schema';

@Injectable()
export class PortalDetailUseCase {
  readonly PORTAL_CACHE_PREFIX = 'portal:';
  constructor(
    private readonly clientMsService: ClientMsService,
    private readonly clientPortfolioMsService: ClientPortfolioMsService,
    private readonly cacheService: CacheService,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  async execute(clientId: string): Promise<Portal | null> {
    const portalCached = await this.cacheService.get(clientId);
    if (portalCached) return JSON.parse(portalCached);

    const client = await this.clientMsService.getById(clientId);
    if (!client) return null;

    const clientPortfolio = await this.clientPortfolioMsService.getById(
      client.idPortfolio,
    );

    const portal: Portal = {
      ...client,
      portfolio: clientPortfolio
        ? {
            ...clientPortfolio,
            id: clientPortfolio._id,
            items: clientPortfolio.items?.map((item) => ({
              ...item,
              quantityMaxRedeem: item.quantity_max_redeem,
              redeemUnit: item.redeem_unit,
              orderReasonRedeem: item.order_reason_redeem,
              skuRedeem: item.sku_redeem,
              price: {
                ...item.price,
                fullPrice: item.price.full_price,
              },
            })),
          }
        : null,
    };

    await this.cacheService.set(
      `${this.PORTAL_CACHE_PREFIX}${clientId}`,
      JSON.stringify(portal),
      this.getPortalDetailCacheTtl(),
    );

    return portal;
  }

  private getPortalDetailCacheTtl(): number {
    return this.configService.get<number>('PORTAL_DETAIL_CACHE_TTL_SECONDS');
  }
}
