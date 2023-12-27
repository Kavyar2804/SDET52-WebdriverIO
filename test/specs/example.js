import { expect } from "chai";
import allurereporter from "@wdio/allure-reporter"

describe('Example of a script', () => {

    it('Launch a browser',async () => {
        allurereporter.addSeverity('Critical')
        allurereporter.addFeature('Login feature')
        
    
        await browser.url('https://webdriver.io')
        let title = await browser.getTitle()
        //await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framewor for Node.js | WebdriverIO')
        // console.log(await browser.getWindowSize());
        // //console.log(await browser.getWindowRect());
        expect(title).to.be.equal('WebdriverIO · Next-gen browser and mobile automation test framewor for Node.js | WebdriverIO')
        // expect(title).to.be.string( )
        // expect(ele).to.have.length()
        // expect(ele).to.be.contains()
    });    
});