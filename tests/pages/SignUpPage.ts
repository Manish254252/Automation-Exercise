import { Page } from "playwright-core";
import { generateRandomData } from "../../utils/Misc";
import { expect } from "playwright/test";
import { UserData } from "../../utils/Data";


export class SignUpPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {

        await this.page.goto('https://automationexercise.com/');
        await this.page.getByRole("link", { name: " Signup / Login" }).click()
        expect(this.page.getByRole("link", { name: " Video Tutorials" })).toBeVisible()
    }

    async signUp(userData: UserData) {


        expect(this.page.getByText("New User Signup!")).toBeVisible()
        await this.page.getByPlaceholder("Name").fill(userData.name)
        await this.page.locator("[data-qa='signup-email']").fill(userData.email)
        await this.page.getByRole("button", { name: "Signup" }).click()
        expect(this.page.getByText("Enter Account Information")).toBeVisible()
    }
    async signIn(userData: UserData) {
        expect(this.page.getByText("Login to your account")).toBeVisible()
        await this.page.locator("[data-qa='login-email']").fill(userData.email)
        await this.page.locator("[data-qa='login-password']").fill(userData.password)
        await this.page.getByRole('button', { name: "Login" }).click()


    }
    async verifySignInSuccess(userData:UserData) {
        await expect(this.page.locator(`//b[contains(text(), "${userData.name}")]`)).toBeVisible();
    }
    async submitAndVerify() {
        await this.page.locator('[data-qa="create-account"]').click()
        await this.page.locator('[data-qa="account-created"]').waitFor({ state: "visible" })
        expect(this.page.locator('[data-qa="account-created"]')).toBeVisible()
        await this.page.getByRole("link", { name: "Continue" }).click()

    }

    async verifyLogoutIsVisible() {

        expect(this.page.getByRole("link", { name: "Logout" })).toBeVisible()

    }
    async clickLogout() {
        await this.page.getByRole("link", { name: "Logout" }).click()
    }
    async verifyDeleteAccIsVisible() {
        expect(this.page.getByRole("link", { name: " Delete Account" })).toBeVisible()
    }

    async clickDeleteAccountAndVerifyAccDeleted() {
        await this.page.getByRole("link", { name: " Delete Account" }).click()
        expect(this.page.getByText("Account Deleted!")).toBeVisible()
        await this.page.getByRole("link", { name: "Continue" }).click()
    }
    async fillAccountInfo(userData: UserData) {
        await this.page.locator("#uniform-id_gender1").click()
        await this.page.locator("#password").fill(userData.password)
        await this.page.locator("#first_name").fill(userData.name)
        await this.page.locator("#last_name").fill(userData.name)
        await this.page.locator("#address1").fill(userData.address)
        await this.page.locator("#state").fill(userData.state)
        await this.page.locator("#city").fill(userData.city)
        await this.page.locator("#zipcode").fill(userData.zipcode)
        await this.page.locator("#mobile_number").fill(userData.mobile)
    }

    async isIncorrectLoginErrorVisible() {
       await expect(this.page.getByText("Your email or password is incorrect!")).toBeVisible()
    }
}