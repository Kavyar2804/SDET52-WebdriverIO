import excel from "exceljs"

describe('excel', () => {
    it('read data', async() => {
       const book = new excel.Workbook()
        //new work sheet
       await book.xlsx.readFile("./test/testdata/data.xlsx")
       const sheet = book.addWorksheet('Sheet6')
       sheet.addRow(6).getCell(6).value='newvalue'
       await book.xlsx.writeFile("./test/testdata/data.xlsx")

       //same work sheet
    //    await book.xlsx.readFile("./test/testdata/data.xlsx")
    //    const sheet = book.getWorksheet('Sheet2')
    //    sheet.addRow(6).getCell(6).value='newvalue'
    //    await book.xlsx.writeFile("./test/testdata/data.xlsx")
       ;
    });
});