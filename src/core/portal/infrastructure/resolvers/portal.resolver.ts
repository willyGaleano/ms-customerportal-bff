import { Args, Query, Resolver } from '@nestjs/graphql';
import { PortalService } from '../../application/services/portal.service';
import { PortalResponse } from '../../domain/models/portal-response.model';
import { Logger } from '@nestjs/common';

@Resolver()
export class PortalResolver {
  private readonly logger = new Logger(PortalResolver.name);
  constructor(private readonly portalService: PortalService) {}

  @Query(() => PortalResponse)
  async getPortals(
    @Args('clientId') clientId: string,
  ): Promise<PortalResponse> {
    try {
      const portal = await this.portalService.getPortal(clientId);
      return { portal };
    } catch (error) {
      this.logger.error({
        message: 'Error getting portal',
        error: error.message,
        errorStack: error.stack,
      });
    }
  }
}
