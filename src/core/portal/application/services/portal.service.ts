import { Injectable } from '@nestjs/common';
import { PortalDetailUseCase } from '../usecases/portal-detail.usecase';
import { Portal } from '../../domain/models/portal.model';

@Injectable()
export class PortalService {
  constructor(private readonly portalDetailUseCase: PortalDetailUseCase) {}

  async getPortal(clientId: string): Promise<Portal | null> {
    return await this.portalDetailUseCase.execute(clientId);
  }
}
