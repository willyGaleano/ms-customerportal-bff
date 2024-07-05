import { Injectable } from '@nestjs/common';
import { PortalDetailUseCase } from '../usecases/portal-detail.usecase';

@Injectable()
export class PortalService {
  constructor(private readonly portalDetailUseCase: PortalDetailUseCase) {}

  async getPortal(clientId: string) {
    return await this.portalDetailUseCase.execute(clientId);
  }
}
