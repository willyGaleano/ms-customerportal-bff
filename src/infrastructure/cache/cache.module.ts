import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-ioredis';
import { Redis } from 'ioredis';
import { CacheService } from './services/cache.service';
import { EnvironmentVariables } from '../settings/env-vars/env-vars.schema';

@Module({
  providers: [
    {
      provide: CacheService,
      inject: [ConfigService<EnvironmentVariables>],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        const useTLS = configService.get('REDIS_USE_TLS', 'false') === 'true';
        let tls: { servername: string } | undefined = undefined;
        const redisHost = configService.get<string>('REDIS_HOST');

        if (useTLS && redisHost)
          tls = {
            servername: redisHost,
          };

        const configuration = {
          store: redisStore,
          host: redisHost,
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PWD'),
          tls,
        };

        const redisClient = new Redis(configuration);
        return new CacheService(redisClient);
      },
    },
  ],
  exports: [CacheService],
})
export class CacheModule {}
