import { SetMetadata } from '@nestjs/common';

export const GLOBAL_API_VERSION = 'v1';
export const GLOBAL_API_PREFIX = `${process.env.APP_NAME}/${GLOBAL_API_VERSION}`;
export const IS_PUBLIC_API = 'isPublicAPI';
export const Public = () => SetMetadata(IS_PUBLIC_API, true);
