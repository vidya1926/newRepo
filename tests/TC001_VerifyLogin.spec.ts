


import path from 'path'
import fs from 'fs'
import { parse } from "csv-parse/sync";
import { RandomDataGeneration } from "../utils/randomData";
import { test } from '../Fixtures/customFixture';
import { expect } from '@playwright/test';
   
const userData=parse(fs.readFileSync(path.join(__dirname,"../data/loginData.csv"),'utf-8'),{
    columns:true, // to make the first row as header
    skip_records_with_empty_values:true
  })
  
userData.forEach(value=>{
test(`Login ${value.TestcaseId}`,async({login})=>{ 
    
    await login.navigate()
    await login.doLogin(value.Username,value.password)
    const title=await login.verifyURL()
    console.log(RandomDataGeneration.getFirstname())
    expect(title).toContain("Leaftaps")
})
})