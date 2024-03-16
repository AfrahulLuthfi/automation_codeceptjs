Feature("login_DDT")
require('dotenv').config({ override: true })
const ExcelJS = require('exceljs')

Scenario("User-Login_DDT", async ({ I }) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./testData/testData_Login.xlsx');
    const sheet = workbook.getWorksheet(1)
    
    for (let row = 2; row <= sheet.rowCount; row++) {
        const username = sheet.getCell(`A${row}`).value;
        const password = sheet.getCell(`B${row}`).value;
        const testcase = sheet.getCell(`C${row}`).value;
        const expectedwarningmessage = sheet.getCell(`D${row}`).value;
    
    switch (username) {
        default:
            I.amOnPage("https://www.saucedemo.com/")
            I.fillField("#user-name","")
            I.fillField("#password","")
            break
        }
        if (testcase == 'Positive') {
            I.fillField("#user-name", secret(username))
            I.fillField("#password", secret(password))
            I.click("#login-button")
            I.see("Products")
            I.logout()
        }else{
            I.fillField("#user-name",(username))
            I.fillField("#password",(password))
            I.click("#login-button")
            I.see(expectedwarningmessage)
            I.refreshPage()
        }
    }
})