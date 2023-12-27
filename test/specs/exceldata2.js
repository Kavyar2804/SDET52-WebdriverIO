import excel from "exceljs"

describe('data from excel', () => {

    it('Write data', async() => {
        const book = new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/data.xlsx")
       //same work sheet
       const sheet = book.getWorksheet("Sheet1")
       sheet.addRow(5).getCell(5).value='SDET52'
       await book.xlsx.writeFile("./test/testdata/data.xlsx")
        
    });
    
});