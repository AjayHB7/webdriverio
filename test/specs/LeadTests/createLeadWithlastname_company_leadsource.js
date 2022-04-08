let hp = require("../../pageobjects/Home/vtigerHomePage")
let lp = require("../../pageobjects/Lead/leadPage")
let cnlp = require("../../pageobjects/Lead/CreateNewLeadPage")
let lip = require("../../pageobjects/Lead/LeadInfoPage")
let wlib = require("../../../GenericUtilites/webutility")

const leadPage = require("../../pageobjects/Lead/leadPage")

describe('leadwithleadsorce', () => {

    it('leadname_company_leadsource', async() => {

        let lastname = "gag"+wlib.randomnumber();
        let companyname = "wtsay"+wlib.randomnumber();
        let leadsource = "Employee"

        await hp.clickOnLeadslnk();
        await lp.clickOnLeadLookUpImg();
        await cnlp.enterLastName(lastname)
        await cnlp.enterCompanyName(companyname);
        await cnlp.selectLeadsorceDrpdwnByVisibleText(leadsource);
        await cnlp.clickOnSave();
        let leadheader = await lip.getlastNameInfo();
        console.log("----------------------------------------------------="+leadheader);
        
    });
    
});