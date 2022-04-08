let hp = require("../../pageobjects/Home/vtigerHomePage")
let cp = require("../../pageobjects/Contacts/ContactsPage")
let cncp = require("../../pageobjects/Contacts/CreateNewContactsPage")
let cip = require("../../pageobjects/Contacts/ContactInfoPage")
let wlib = require("../../../GenericUtilites/webutility")
const { assert } = require("chai")

describe('createcontactwithlastname', () => {
    it('createcontactwithlastnametest',async () => {

        await hp.clickOnContactslnk();
        await cp.clickOnCreateContactLookUpImg();
        await cncp.createContactWithLastName("asus"+wlib.randomnumber())
        await cncp.clickOnSave();
        let header=await cip.getContactNameInfo()


        console.log(header);

        await assert.fail('failed');

        
    });
});