import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Customer Portal BFF')
  .setDescription('Customer Portal Bff Documentation')
  .setVersion('1.0.0')
  .addTag('ms-customerportal-bff')
  .build();
