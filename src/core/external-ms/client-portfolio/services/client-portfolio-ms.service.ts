import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HTTP_CLIENT_SERVICE } from '../../../../infrastructure/http/constants';
import { HttpClient } from '../../../../infrastructure/http/interfaces/http-client.interface';
import { EnvironmentVariables } from '../../../../infrastructure/settings/env-vars/env-vars.schema';
import { ClientPortfolio } from '../models/client-portfolio.model';

@Injectable()
export class ClientPortfolioMsService {
  constructor(
    @Inject(HTTP_CLIENT_SERVICE) private readonly httpClient: HttpClient,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  async getById(id: string): Promise<ClientPortfolio> {
    const clientPortfolioMsUrl = `${this.getBaseUrl()}/client-portfolios/${id}`;
    return await this.httpClient.get<ClientPortfolio>(clientPortfolioMsUrl);
  }

  private getBaseUrl(): string {
    return this.configService.get<string>('CLIENT_PORTFOLIO_MS_URL');
  }
}
