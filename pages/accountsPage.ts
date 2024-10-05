import { BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class AccountsPage extends LoginPage{

    // public locators={
    //     //spred syntax
    //             ...this.locators,
    //         "":""
    // }
    constructor(page:Page,context:BrowserContext){
        super(page,context)
    }
    async createAccount(){
// logic
    }
   
    





}