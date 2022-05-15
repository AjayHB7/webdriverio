let wlib = require('../../GenericUtilites/webutility')
let hp = require('../pageobjects/Home/vtigerHomePage')
let cp = require('../pageobjects/Contacts/ContactsPage')
let cnc = require('../pageobjects/Contacts/CreateNewContactsPage')


describe('dropdown', async () => {
    
    it.skip('getting text from element dropdown',async () => {
        let elementsArray = await $$("//select[@id = 'qccombo']//option")
        wu.selectelementfromdropdown(elementsArray, 'New Vendor')
        await browser.debug()
    });

    it.skip
    ('switchtoframes', async() => {

        //await browser.maximizeWindow();

        await browser.pause(3000)

        await browser.url("https://chercher.tech/practice/frames");

        await browser.pause(3000)

        let frame1 = await $("//iframe[@name='iamframe']")

        await browser.switchToFrame(frame1);

        console.log("--------------------------------------------------------------------")

       let textfield = await $("//b[@id='topic']/following-sibling::input"); 
       
       await textfield.setValue("hello")
       
       await browser.pause(4000)

        
    }); 

    it.skip('selectingfrondropdown',  async () => {
        
        await hp.clickOnContactslnk();
        await cp.clickOnCreateContactLookUpImg();
        await cnc.selectfromdropdown("Existing Customer");

        await browser.pause(5000);

    });

    it.skip('random', async () => {

        await browser.pause(5000)

        // console.log(wlib.randomnumber());
        
    });

      
    
});

