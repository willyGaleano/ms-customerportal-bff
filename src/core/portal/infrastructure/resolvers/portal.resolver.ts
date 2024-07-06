import { Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PortalService } from '../../application/services/portal.service';
import { PortalResponse } from '../../domain/models/portal-response.model';

@Resolver()
export class PortalResolver {
  private readonly logger = new Logger(PortalResolver.name);
  constructor(private readonly portalService: PortalService) {}

  @Query(() => PortalResponse)
  async portalDetail(
    @Args('clientId') clientId: string,
  ): Promise<PortalResponse> {
    try {
      const portal = await this.portalService.getPortal(clientId);
      return { portal };
    } catch (error) {
      this.logger.error({
        message: 'Error getting portal',
        errorMsg: error.message,
        error: { ...error },
      });
      return { portal: null };
    }
  }
}
