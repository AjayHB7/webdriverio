let hp = require("../../pageobjects/Home/vtigerHomePage")
let lp = require("../../pageobjects/Lead/leadPage")
let cnlp = require("../../pageobjects/Lead/CreateNewLeadPage")
let lip = require("../../pageobjects/Lead/LeadInfoPage")
let wlib = require("../../../GenericUtilites/webutility")

describe('lead', () => {
    it('withlastnameandcompany', async() => {

        let lastname = "asdf"+wlib.randomnumber();
        let companyname = "qwerty"+wlib.randomnumber();

        await hp.clickOnLeadslnk();
        await lp.clickOnLeadLookUpImg();
        await cnlp.enterLastName(lastname);
        await cnlp.enterCompanyName(companyname)
        await cnlp.clickOnSave();
        let leadheader = await lip.getlastNameInfo()
        console.log(leadheader);
       
    });
});





