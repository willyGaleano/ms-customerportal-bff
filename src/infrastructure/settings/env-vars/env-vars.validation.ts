import { z } from 'zod';
import { Logger } from 'nestjs-pino';
import { EnvironmentVariablesSchema } from './env-vars.schema';

export const validateEnvironment = (
  configuration: Record<string, unknown>,
  logger: Logger,
) => {
  try {
    return EnvironmentVariablesSchema.parse(configuration);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const pathErros = error.errors.map((err) => err.path.join('.'));

      logger.warn(
        `Environment variables don't match the schema: ${pathErros.join(', ')}`,
      );
    } else {
      logger.warn(`Exception on Environment variables: ${error}`);
    }
    return true;
  }
};
