class examplepage
{
    get usntxt()
    {
        return $('#username')
    }
    get pwdtxt()
    {
        return $('#password')
    }
    get submtbtn()
    {
        return $('#submit')
    }

    async loginaction(usn,pwd)
    {
        await this.usntxt.setValue(usn)
        await this.pwdtxt.setValue(pwd)
        await browser.pause(5000)
        await this.submtbtn.click()
    }

}

export default new examplepage()