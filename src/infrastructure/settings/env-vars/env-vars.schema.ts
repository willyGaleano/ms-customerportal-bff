import { z } from 'zod';
import { environmentValues, nodeEnvValues } from './env-vars.model';

export const CommonVariablesSchema = z
  .object({
    ENVIRONMENT: z.enum(environmentValues),
    NODE_ENV: z.enum(nodeEnvValues),
    LOG_LEVEL: z.string(),
    APP_NAME: z.string(),
    HTTP_PORT: z.coerce.number(),
  })
  .describe('CommonVariables');

export const RedisVariablesSchema = CommonVariablesSchema.merge(
  z.object({
    REDIS_HOST: z.string(),
    REDIS_PORT: z.coerce.number(),
    REDIS_PWD: z.string(),
    REDIS_USE_TLS: z.string().default('false').optional(),
    CACHE_DEFAULT_TTL_SECONDS: z.coerce.number().default(60).optional(),
  }),
);

export const HttpVariablesSchema = CommonVariablesSchema.merge(
  z.object({
    HTTP_TIMEOUT: z.coerce.number(),
    HTTP_MAX_REDIRECTS: z.coerce.number(),
  }),
);

export const ClientMsVariablesSchema = CommonVariablesSchema.merge(
  z.object({
    CLIENT_MS_URL: z.string(),
  }),
);

export const ClientPortfolioMsVariablesSchema = CommonVariablesSchema.merge(
  z.object({
    CLIENT_PORTFOLIO_MS_URL: z.string(),
  }),
);

export const PortalVariablesSchema = CommonVariablesSchema.merge(
  z.object({
    PORTAL_DETAIL_CACHE_TTL_SECONDS: z.coerce.number().default(300),
  }),
);

export const EnvironmentVariablesSchema = CommonVariablesSchema.merge(
  RedisVariablesSchema,
)
  .merge(HttpVariablesSchema)
  .merge(ClientMsVariablesSchema)
  .merge(ClientPortfolioMsVariablesSchema)
  .merge(PortalVariablesSchema)
  .describe('EnvironmentVariables');

export type EnvironmentVariables = z.infer<typeof EnvironmentVariablesSchema>;
