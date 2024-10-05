import { WelcomePage } from "./welcomePage";


export class HomePage extends WelcomePage {
   //PascalCase

    async clickLeads() {
        await this.page.getByRole("link", { name: "Leads" }).click()
    }

    async clickAccount() {//camelCase
        await this.page.getByRole("link", { name: "Account" }).click()
    }

    async clicksubmit() {
        await this.page.locator(".submit").click()
        return new HomePage(this.page, this.context)
    }

}