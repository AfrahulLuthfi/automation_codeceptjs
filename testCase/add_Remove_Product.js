Feature("User-add_Remove_Product")
require('dotenv').config({ override: true})
const ExcelJS = require('exceljs')

Scenario("User-add_remove_Product", async ({I}) =>{
    I.amOnPage("")
    I.login()
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./testData/testData_Product.xlsx');
    const sheet=workbook.getWorksheet(1)
//Add Product
    for (let row=2; row <= sheet.rowCount; row++){
        const productType = sheet.getCell(`A${row}`).value;
        const AddtoCart = sheet.getCell(`B${row}`).value;
        const productDesc = sheet.getCell(`D${row}`).value;
        const productPrice = sheet.getCell(`E${row}`).value;
        const locator = sheet.getCell(`F${row}`).value;
        switch (productType) {
            default:
            I.click(locator)       
            I.see(productType)       
            I.see(productDesc)        
            I.see(productPrice)       
            break
        }
        if (AddtoCart == 'tambah') {
            I.click("//*[contains(text(), 'Add to cart')]") 
            I.click("//*[contains(@class, 'shopping_cart_link')]")    
            I.seeElement("//*[contains(@class, 'title')]")            
            I.click('#continue-shopping')            
            } else {
            I.dontSeeElement("//*[contains(@class, 'shopping_cart_badge')])")
            }
        }
//Remove Product
        for (let row=2; row <= sheet.rowCount; row++){
            const productType = sheet.getCell(`A${row}`).value;
            const Remove = sheet.getCell(`C${row}`).value;
            const productDesc = sheet.getCell(`D${row}`).value;
            const productPrice = sheet.getCell(`E${row}`).value;
            const locator = sheet.getCell(`F${row}`).value;
            switch (productType) {
                default: 
                I.click(locator)          
                I.see(productType)         
                I.see(productDesc)          
                I.see(productPrice)         
                    break
                }
                if (Remove == 'remove') {
                    I.click("//*[contains(text(), 'Remove')]") 
                    I.click("//*[contains(@class, 'shopping_cart_link')]")                  
                    I.seeElement("//*[contains(@class, 'title')]")                  
                    I.click('#continue-shopping')                   
                    } else {
                    I.dontSeeElement("//*[contains(@class, 'shopping_cart_badge')])")
                    }
            }            
        })

.tag ("Test Case Id 013"), ("Test Case Id 014"), ("Test Case Id 015"), ("Test Case Id 016")