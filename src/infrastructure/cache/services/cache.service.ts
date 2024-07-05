import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class CacheService {
  constructor(private readonly redisClient: Redis) {}

  async get(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  async set(
    key: string,
    value: string | Buffer | number,
    ttl?: number,
  ): Promise<void> {
    if (ttl) {
      await this.redisClient.set(key, value, 'EX', ttl);
      return;
    }
    await this.redisClient.set(key, value);
  }

  async exists(key: string): Promise<number> {
    return await this.redisClient.exists(key);
  }
}
