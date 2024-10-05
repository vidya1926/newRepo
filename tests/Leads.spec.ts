
import { test } from "../Fixtures/customFixture";
import { HomePage } from "../pages/homePage";


//test.use({storageState:'loginStorage.json'})
test(`Leads Module`,async({login,homePage,accountPage})=>{    
   
   await homePage.clickCRM()
   await homePage.clickLeads()
   // await homePage.clicksubmit();
   // await accountPage.createAccount();
   // await homePage.clicksubmit()
  //await acPage.clickAccount()



 })
