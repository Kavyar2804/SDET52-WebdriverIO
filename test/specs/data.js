import fs from "fs"
import examplepompage from "../pageobjects/examplepompage.js";
let creden = JSON.parse(fs.readFileSync('./test/testdata/testdata.json'))

describe('fetchdata', () => {
    //  let username = creden.name
    // let password =  creden.dob
  
    
    creden.forEach((data, index) => {
        let username= data.name
        let password= data.dob
        
    it('datafromjson', async () => {
        console.log(username, password);
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await browser.maximizeWindow()
        await examplepompage.loginaction(username,password)
        await browser.pause(2000)
    });
    
});
    
});