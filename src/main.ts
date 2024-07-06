import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { GLOBAL_API_PREFIX } from './infrastructure/utils/constants';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './infrastructure/settings/swagger/swagger.config';
import { validateEnvironment } from './infrastructure/settings/env-vars/env-vars.validation';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true },
  );

  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.useLogger(app.get(Logger));

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${GLOBAL_API_PREFIX}/api-docs`, app, document);

  const configService = app.get<ConfigService>(ConfigService);

  validateEnvironment(process.env, app.get(Logger));
  await app.listen(configService.get('HTTP_PORT'), '0.0.0.0', async () => {
    app.get(Logger).log(`server listening on ${await app.getUrl()}`);
  });
}
bootstrap();
