import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HTTP_CLIENT_SERVICE } from './constants';
import { AxiosHttpClientService } from './services/axios-http-client.service';
import { EnvironmentVariables } from '../settings/env-vars/env-vars.schema';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => ({
        timeout: configService.get('HTTP_TIMEOUT'),
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: HTTP_CLIENT_SERVICE,
      useClass: AxiosHttpClientService,
    },
  ],
  exports: [HttpModule, HTTP_CLIENT_SERVICE],
})
export class HttpClientModule {}
