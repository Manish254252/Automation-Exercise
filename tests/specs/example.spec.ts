import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { UserData } from '../../utils/Data';
import { generateRandomData } from '../../utils/Misc';

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

  await test.step('Navigate to application home page', async () => {
    await signup.navigate();
  });

  await test.step('Register new user with valid details', async () => {
    await signup.signUp(userData);
  });

  await test.step('Fill account information', async () => {
    await signup.fillAccountInfo(userData);
  });

  await test.step('Submit registration form and verify account creation', async () => {
    await signup.submitAndVerify();
  });

  await test.step('Verify Logout option is visible', async () => {
    await signup.verifyLogoutIsVisible();
  });

  await test.step('Verify Delete Account option is visible', async () => {
    await signup.verifyDeleteAccIsVisible();
  });

  await test.step('Delete account and verify account deletion', async () => {
    await signup.clickDeleteAccountAndVerifyAccDeleted();
  });
});


test('Test Case 2: Login User with correct email and password', async ({ page }) => {
  const signup = new SignUpPage(page);

  await test.step('Navigate to application home page', async () => {
    await signup.navigate();
  });

  await test.step('Register a new user', async () => {
    await signup.signUp(userData);
    await signup.fillAccountInfo(userData);
    await signup.submitAndVerify();
  });

  await test.step('Logout from the application', async () => {
    await signup.clickLogout();
  });

  await test.step('Login with valid credentials', async () => {
    await signup.signIn(userData);
  });

  await test.step('Verify successful login', async () => {
    await signup.verifySignInSuccess(userData);
  });

  await test.step('Delete account after successful login', async () => {
    await signup.verifyDeleteAccIsVisible();
    await signup.clickDeleteAccountAndVerifyAccDeleted();
  });
});

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
  const signup = new SignUpPage(page);

  await test.step('Navigate to application home page', async () => {
    await signup.navigate();
  });

  await test.step('Attempt login with invalid credentials', async () => {
    await signup.signIn(userData);
  });

  await test.step('Verify incorrect login error message is displayed', async () => {
    await signup.isIncorrectLoginErrorVisible();
  });
});


test('Test Case 4: Logout User', async ({ page }) => {
  const signup = new SignUpPage(page);

  await test.step('Navigate to application home page', async () => {
    await signup.navigate();
  });

  await test.step('Register and login user', async () => {
    await signup.signUp(userData);
    await signup.fillAccountInfo(userData);
    await signup.submitAndVerify();
  });

  await test.step('Logout from application', async () => {
    await signup.clickLogout();
  });

  await test.step('Login again with valid credentials', async () => {
    await signup.signIn(userData);
    await signup.verifySignInSuccess(userData);
  });

  await test.step('Logout again and verify session ends', async () => {
    await signup.clickLogout();
  });
});
