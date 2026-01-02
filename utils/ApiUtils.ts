// src/core/apiClient.ts
import { APIRequestContext } from '@playwright/test';
import { logger } from './Logger';
import { BASE_URLS, HEADERS } from './env';

export class ApiClient {
  constructor(private request: APIRequestContext,private URL:string) {
    logger.info(URL)
  }

  async get(endpoint: string, params?: any) {
    const res = await this.request.get(`${this.URL}${endpoint}`, { params });
    logger.info({ method: 'GET', endpoint, status: res.status() });
    return res;
  }

  async post(endpoint: string, data?: any) {
    const res = await this.request.post(`${this.URL}${endpoint}`, {
      data,
      headers: HEADERS,
    });
    logger.info({ method: 'POST', endpoint, status: res.status() });
    logger.info(`${BASE_URLS}${endpoint}`);
    return res;
  }
}
