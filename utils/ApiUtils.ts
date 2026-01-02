// src/core/apiClient.ts
import { APIRequestContext } from '@playwright/test';
import { logger } from './Logger';
import { BASE_URL, HEADERS } from './env';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string, params?: any) {
    const res = await this.request.get(`${BASE_URL}${endpoint}`, { params });
    logger.info({ method: 'GET', endpoint, status: res.status() });
    return res;
  }

  async post(endpoint: string, data?: any) {
    const res = await this.request.post(`${BASE_URL}${endpoint}`, {
      data,
      headers: HEADERS,
    });
    logger.info({ method: 'POST', endpoint, status: res.status() });
    logger.info(`${BASE_URL}${endpoint}`);
    return res;
  }
}
