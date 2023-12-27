import fs from 'fs';
import examplepompage from '../pageobjects/examplepompage.js';
let cred = JSON.parse(fs.readFileSync("./test/testdata/testdata.json"))

describe('fetch', () => {
   
//    let usn = cred.name.toString()
//     let pwd = cred.dob.toString()

    cred.forEach((data,index) => {
        
       const usn = data.name.toString()
       const pwd =data.dob.toString()
        console.log(usn , pwd);

    
    it('datafrom json', async() => {

        await browser.url('https://practicetestautomation.com/practice-test-login/')
        await browser.maximizeWindow()
        console.log(usn ,pwd);
        await examplepompage.loginaction(usn,pwd)
        await browser.pause(2000)
   
    });
});

});