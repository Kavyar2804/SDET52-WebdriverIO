import excel from "exceljs"

describe('data from excel', () => {

    it('read data', async() => {
        const book = new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/data.xlsx")
       const sheet =  book.getWorksheet('Sheet1')
      let data = sheet.getRow(1).getCell(1).toString()
      console.log(`$$$$$$$$$$$$ data from excel ${data}`);
        
    });
    
});