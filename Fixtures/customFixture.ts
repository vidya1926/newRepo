import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { WelcomePage } from '../pages/welcomePage'
import { AccountsPage } from '../pages/accountsPage'

type leaftapsFixture={
    //variable :classname
    login:LoginPage
    welcomePage:WelcomePage
    homePage:HomePage
    accountPage:AccountsPage
}

//const login=new LoingPage(page,context)

export const test=baseTest.extend<leaftapsFixture>({
    login:async({page,context},use)=>{
        const lp=new LoginPage(page,context)
        await lp.navigate()
        await lp.doLogin("demoSalesManager","crmsfa")
        use(lp)
    },
    welcomePage:async({page,context},use)=>{
        const wp=new WelcomePage(page,context)
        use(wp)
    },
    homePage:async({page,context},use)=>{
        const hp=new HomePage(page,context)
        use(hp)
    },

    accountPage:async({page,context},use)=>{
        const ac=new AccountsPage(page,context)
        use(ac)
    }


}
)



