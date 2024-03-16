Feature("User-add_ToCart")
require('dotenv').config({ override: true})
const ExcelJS = require('exceljs')

Scenario("User-add_ToCart", async ({I}) =>{
    I.amOnPage("")
    I.login()
    
    // const title_backpack = await I.grabTextFrom("#item_4_title_link")
    // const desc_backpack = await I.grabTextFrom("//*[contains(text(), 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')]")
    // const price_backpack = await I.grabTextFrom("(//*[contains(@class,'inventory_item_price')])[1]")
    // const title_bike_light = await I.grabTextFrom("#item_0_title_link")
    // const desc_bike_light = await I.grabTextFrom("(//*[contains(@class, 'inventory_item_desc')])[4]")
    // const price_bike_light = await I.grabTextFrom("(//*[contains(@class,'inventory_item_price')])[2]")
    // const title_bolt_tshirt = await I.grabTextFrom("#item_1_title_link")
    // const desc_bolt_tshirt = await I.grabTextFrom("(//*[contains(@class, 'inventory_item_desc')])[6]")
    // const price_bolt_tshirt = await I.grabTextFrom("(//*[contains(@class,'inventory_item_price')])[3]")
    // const title_fleece_jacket = await I.grabTextFrom("#item_5_title_link")
    // const desc_fleece_jacket = await I.grabTextFrom("(//*[contains(@class, 'inventory_item_desc')])[8]")
    // const price_fleece_jacket = await I.grabTextFrom("(//*[contains(@class,'inventory_item_price')])[4]")
   
    //load the excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./testData/testData_Product.xlsx');

    //select sheet
    const sheet=workbook.getWorksheet(1)

//iterate through rows and execute the test for each set of data
for (let row=2; row <= sheet.rowCount; row++){
    const productType = sheet.getCell(`A${row}`).value;
    const AddtoCart = sheet.getCell(`B${row}`).value;
    const Remove = sheet.getCell(`C${row}`).value;
    const productDesc = sheet.getCell(`D${row}`).value;
    const productPrice = sheet.getCell(`E${row}`).value;
    const locator = sheet.getCell(`F${row}`).value;

	switch (productType) {
	// case productType =='Sauce Labs Backpack':
		
	// 	I.click(locator)

	// 	I.see(productType)

	// 	I.see(productDesc)

	// 	I.see(productPrice)

	// 	break
	// case productType == 'Sauce Labs Bike Light':
	// 	console.log(productType)

	// 	I.click(locator)

	// 	I.see(productType)

	// 	I.see(productDesc)

	// 	I.see(productPrice)

	// 	break
	// case productType == 'Sauce Labs Bolt T-Shirt':
	// 	console.log(productType)

	// 	I.click(locator)

	// 	I.see(productType)

	// 	I.see(productDesc)

	// 	I.see(productPrice)

	// 	break
	// case productType == 'Sauce Labs Fleece Jacket':
	// 	console.log(productType)

	// 	I.click(locator)

	// 	I.see(productType)

	// 	I.see(productDesc)

	// 	I.see(productPrice)
	// 	break
	
    default:

    I.click(locator)

    I.see(productType)

    I.see(productDesc)

    I.see(productPrice)

		break
        }

            if (AddtoCart == 'tambah') {
                I.click("//*[contains(text(), 'Add to cart')]")
                // I.focus("//*[contains(@class, 'shopping_cart_link')]")
                // I.see("//*[contains(@class, 'shopping_cart_badge')])")
                
                I.click("//*[contains(@class, 'shopping_cart_link')]")
                
                I.seeElement("//*[contains(@class, 'title')]")
                
                I.click('#continue-shopping')
                
                } else {
                I.dontSeeElement("//*[contains(@class, 'shopping_cart_badge')])")
                }
    }
    for (let row=2; row <= sheet.rowCount; row++){
        const productType = sheet.getCell(`A${row}`).value;
        const AddtoCart = sheet.getCell(`B${row}`).value;
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
            // I.seeAttributesOnElements("//*[contains(@class, 'shopping_cart_link')]", {method :"//*[contains(@class, 'shopping_cart_badge')]"})
            // I.see("//*[contains(@class, 'shopping_cart_badge')])")
            
            I.click("//*[contains(@class, 'shopping_cart_link')]")
            
            I.seeElement("//*[contains(@class, 'title')]")
            
            I.click('#continue-shopping')
            
            } else {
            I.dontSeeElement("//*[contains(@class, 'shopping_cart_badge')])")
            }
    }            
})