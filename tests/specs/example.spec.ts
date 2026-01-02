import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { UserData } from '../../utils/Data';
import { generateRandomData } from '../../utils/Misc';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('Search Bar', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByLabel("Search (Ctrl+K)").click()
//   await page.locator("#docsearch-input").fill("Report")
// });
let userData: UserData;
test.beforeEach(async () => {
  userData = {
    name: generateRandomData("name"),
    email: generateRandomData("email"),
    password: generateRandomData("password"),
    address: generateRandomData("address"),
    state: generateRandomData("state"),
    city: generateRandomData("city"),
    zipcode: generateRandomData("zipcode"),
    mobile: generateRandomData("mobile")
  };
})

test('Test Case 1: Register User', async ({ page }) => {
  const signup = new SignUpPage(page);
  await signup.navigate()
  await signup.signUp(userData)
  await signup.fillAccountInfo(userData)
  await signup.submitAndVerify()
  await signup.verifyLogoutIsVisible()
  await signup.verifyDeleteAccIsVisible()
  await signup.clickDeleteAccountAndVerifyAccDeleted()
});

test('Test Case 2: Login User with correct email and password', async ({ page }) => {

  const signup = new SignUpPage(page);
  await signup.navigate()
  await signup.signUp(userData)
  await signup.fillAccountInfo(userData)
  await signup.submitAndVerify()
  await signup.clickLogout()
  await signup.signIn(userData)
  await signup.verifySignInSuccess(userData)
  await signup.verifyDeleteAccIsVisible()
  await signup.clickDeleteAccountAndVerifyAccDeleted()
});

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {

  const signup = new SignUpPage(page);
  await signup.navigate()
  await signup.signIn(userData)
  await signup.isIncorrectLoginErrorVisible()
});

test('Test Case 4: Logout User', async ({ page }) => {

  const signup = new SignUpPage(page);
  await signup.navigate()
  await signup.signUp(userData)
  await signup.fillAccountInfo(userData)
  await signup.submitAndVerify()
  await signup.clickLogout()
  await signup.signIn(userData)
  await signup.verifySignInSuccess(userData)
  await signup.clickLogout()
});