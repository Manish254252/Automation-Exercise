import fs from 'fs';
import path from 'path';
import { TestInfo } from '@playwright/test';

export function loadTestData(testInfo: TestInfo): any {
  const specFileName = path.basename(testInfo.file, '.spec.ts');

  const projectRoot = process.cwd();

  const testDataDir = path.join(projectRoot, 'tests', 'testData');
  const jsonFilePath = path.join(testDataDir, `${specFileName}.json`);

  // 🔍 CI debug (can remove later)
  if (!fs.existsSync(testDataDir)) {
    throw new Error(`❌ testData folder not found at: ${testDataDir}`);
  }

  if (!fs.existsSync(jsonFilePath)) {
    throw new Error(
      `❌ Test data file not found.
Expected: ${jsonFilePath}
Available files: ${fs.readdirSync(testDataDir).join(', ')}`
    );
  }

  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  const testName = testInfo.title;

  if (!jsonData[testName]) {
    throw new Error(
      `❌ Test data not found for test: "${testName}"
Available keys: ${Object.keys(jsonData).join(', ')}`
    );
  }

  return jsonData[testName];
}
