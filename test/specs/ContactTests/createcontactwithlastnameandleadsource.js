let hp = require("../../pageobjects/Home/vtigerHomePage")
let cp = require("../../pageobjects/Contacts/ContactsPage")
let cncp = require("../../pageobjects/Contacts/CreateNewContactsPage")
let cip = require("../../pageobjects/Contacts/ContactInfoPage")
let wlib = require("../../../GenericUtilites/webutility")

describe('createcontactwithlastnameandleadsource', () => {

    it('createcontactwithlastnameandleadsourcetest', async() => {
       await hp.clickOnContactslnk();
       await cp.clickOnCreateContactLookUpImg();
       await cncp.enterLastName("redmi"+wlib.randomnumber());
       await cncp.selectLeadSourceByVisibleText("Employee")
       await cncp.clickOnSave();
        let header = await cip.getContactNameInfo();
        console.log(header);
    });
    
});