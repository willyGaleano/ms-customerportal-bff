import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { GLOBAL_API_PREFIX } from './infrastructure/utils/constants';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true },
  );

  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.useLogger(app.get(Logger));

  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('HTTP_PORT'), '0.0.0.0', async () => {
    app.get(Logger).log(`server listening on ${await app.getUrl()}`);
  });
}
bootstrap();
