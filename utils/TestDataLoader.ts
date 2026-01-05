import fs from 'fs';
import path from 'path';
import { TestInfo } from '@playwright/test';

export function loadTestData(testInfo: TestInfo): any {
  // Get spec file name (without extension)
  const specFileName = path.basename(testInfo.file, '.spec.ts');

 const projectRoot = process.cwd(); // ✅ CI-safe

const jsonFilePath = path.join(
  projectRoot,
  'tests',
  'testData',
  `${specFileName}.json`
);

  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  // Match JSON key with test name
  const testName = testInfo.title;

  if (!jsonData[testName]) {
    throw new Error(`Test data not found for test case: ${testName}`);
  }

  return jsonData[testName];
}
