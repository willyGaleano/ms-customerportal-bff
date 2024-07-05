import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HTTP_CLIENT_SERVICE } from '../../../../infrastructure/http/constants';
import { HttpClient } from '../../../../infrastructure/http/interfaces/http-client.interface';
import { EnvironmentVariables } from '../../../../infrastructure/settings/env-vars/env-vars.schema';
import { Client } from '../model/client.model';

@Injectable()
export class ClientMsService {
  constructor(
    @Inject(HTTP_CLIENT_SERVICE) private readonly httpClient: HttpClient,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  async getById(id: string): Promise<Client> {
    const clientMsUrl = `${this.getBaseUrl()}/clients/${id}`;
    return await this.httpClient.get<Client>(clientMsUrl);
  }

  private getBaseUrl(): string {
    return this.configService.get<string>('CLIENT_MS_URL');
  }
}
