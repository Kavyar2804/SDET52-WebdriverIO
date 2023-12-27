import { expect } from "chai";

describe('Dropdown', () => {
    it('ddvalues javascript', async () => {
        await browser.url('https://www.facebook.com/r.php')
        let monthlist = await browser.$$('#month').map(ele=>ele.getText())
        console.log(monthlist);
        let mnthli = monthlist.toString()
        console.log(mnthli);
        let mntspi = mnthli.split("\n")
        console.log(mntspi);
        expect(mntspi).to.be.an('array').to.have.length(12)
        expect(mntspi).to.be.an('array').that.includes('Jan')
        








        // console.log(mntspi.length);
        // let mnthlst = mntspi.length
        // expect(mnthlst).to.have.lengthOf(12)
        
        
    });
});