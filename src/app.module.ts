import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import configuration from './infrastructure/settings/env-vars/global.config';
import { HealthCheckModule } from './core/health-check/health-check.module';
import { GlobalConfig } from './infrastructure/settings/env-vars/env-vars.model';
import { getConfigLogger } from './infrastructure/settings/logger/logger.config';
import { graphqlConfig } from './infrastructure/settings/graphql/graphql.config';
import { HttpClientModule } from './infrastructure/http/http.module';
import { CacheModule } from './infrastructure/cache/cache.module';
import { PortalModule } from './core/portal/portal.module';
import { ExternalMsModule } from './core/external-ms/external-ms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<GlobalConfig>) => {
        return getConfigLogger(configService);
      },
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    HttpClientModule,
    CacheModule,
    HealthCheckModule,
    ExternalMsModule,
    PortalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
