import { LogLevel } from '../logger/logger.model';
import { Environment, GlobalConfig, NodeEnv } from './env-vars.model';

export default (): GlobalConfig => ({
  appName: process.env.APP_NAME || 'global-mobility-apex-ms',
  environment: (process.env.ENVIRONMENT as Environment) || Environment.LOCAL,
  logLevel: (process.env.LOG_LEVEL as LogLevel) || LogLevel.TRACE,
  nodeEnv: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEVELOPMENT,
});
