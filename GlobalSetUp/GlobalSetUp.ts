import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
     const context = await browser.newContext();
    const page = await context.newPage();
    console.log("global set up ");
    

    //   // Example: Login and save auth state
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click()
    //   await page.click('#login');

    await context.storageState({ path: 'auth.json' });
    console.log("Global set Up is Done");


    await browser.close();
}

export default globalSetup;
