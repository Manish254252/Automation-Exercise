// apiLogger.ts
import { logger } from './Logger';
import fs from 'fs';

export function logApiResponse(response: { users: any[] }, keys: string[] = ['id', 'firstName', 'lastName'], filename: string = 'api-response.txt') {
  const summary = response.users.map(user => {
    const obj: any = {};
    keys.forEach(key => obj[key] = user[key]);
    return obj;
  });

  // Log summary using Winston
  logger.info({ apiSummary: summary });

  // Save to file
  fs.writeFileSync(filename, JSON.stringify(response, null, 2));
  console.log(`✅ API response saved to ${filename}`);
}
