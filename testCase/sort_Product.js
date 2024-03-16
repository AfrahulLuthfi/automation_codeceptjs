Feature("User-Sort_Products")

Scenario("User-Sort_Products", async ({ I }) => {
    I.amOnPage("")
    I.login()
    I.click("#react-burger-cross-btn")

    //Cheats
    // const backpack = await I.grabTextFrom ("((//*[contains(@class,'inventory_item_name')])[1]")
    // const bikelight = await I.grabTextFrom ("(//*[contains(@class,'inventory_item_name')])[2]")
    // const t_shirt = await I.grabTextFrom ("(//*[contains(@class,'inventory_item_name')])[3]")
    // const jacket = await I.grabTextFrom ("(//*[contains(@class,'inventory_item_name')])[4]")
    // const onesie = await I.grabTextFrom ("(//*[contains(@class,'inventory_item_name')])[5]")
    // const t_shirt_red = await I.grabTextFrom ("(//*[contains(@class,'inventory_item_name')])[6]")
    // I.click(("//*[contains(text(),'"+onesie+"')]"))
    
    const dropdownSelector =("//*[contains(@class,'product_sort_container')]");
    //Sort Product A to Z
    I.selectOption(dropdownSelector, 'az')
    I.click("(//*[contains(@class,'inventory_item_name')])[1]")
    I.see('Sauce Labs Backpack')
    I.click("#back-to-products")
    I.selectOption(dropdownSelector, 'az')
    I.click("(//*[contains(@class,'inventory_item_name')])[6]")
    I.see('Test.allTheThings() T-Shirt (Red)')
    I.click("#back-to-products")

    //Sort Product Z to A
    I.selectOption(dropdownSelector, 'za')
    I.click("(//*[contains(@class,'inventory_item_name')])[1]")*
    I.see('Test.allTheThings() T-Shirt (Red)')
    I.click("#back-to-products")
    I.selectOption(dropdownSelector, 'za')
    I.click("(//*[contains(@class,'inventory_item_name')])[6]")
    I.see('Sauce Labs Backpack')
    I.click("#back-to-products")

    //Sort Product Low to High
    I.selectOption(dropdownSelector,'lohi')
    I.click("(//*[contains(@class,'inventory_item_name')])[1]")
    I.see('Sauce Labs Onesie')
    I.click("#back-to-products")
    I.selectOption(dropdownSelector,'lohi')
    I.click("(//*[contains(@class,'inventory_item_name')])[6]")
    I.see('Sauce Labs Fleece Jacket')
    I.click("#back-to-products")

    //Sort Product High to Low
    I.selectOption(dropdownSelector, 'hilo')
    I.click("(//*[contains(@class,'inventory_item_name')])[1]")
    I.see('Sauce Labs Fleece Jacket')
    I.click("#back-to-products")
    I.selectOption(dropdownSelector, 'hilo')
    I.click("(//*[contains(@class,'inventory_item_name')])[6]")
    I.see('Sauce Labs Onesie')
    I.click("#back-to-products")
})    