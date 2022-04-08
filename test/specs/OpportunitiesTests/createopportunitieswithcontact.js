let hp = require("../../pageobjects/Home/vtigerHomePage")
let op = require("../../pageobjects/Opportunities/OpportunitiesPage")
let cnop = require("../../pageobjects/Opportunities/CreateNewOpportunitiesPage")
let oip = require("../../pageobjects/Opportunities/OpportunitiesInfoPage")
let wlib = require("../../../GenericUtilites/webutility")


describe('createopportunitieswithcontact', () => {

    it('createopportunitieswithcontacttest', async() => {

        let ran = wlib.randomnumber();
        let oppname = "cosmo"+ran

        let conname = "ahb"

        await hp.clickOnOpportunitieslnk();

        await op.clickOnCreateOppLookUpBtn();

        await cnop.enterOpportunityName(oppname);

        await browser.pause(3000);

        await cnop.selectFromRelatedToDropDnByVisibleText("Contacts")

        await browser.pause(3000);
        
        

        let parentwindow = await browser.getWindowHandle();

        await browser.pause(3000);

        await cnop.clickonrelatedtolookupBtn();

        //await browser.debug();

        await browser.pause(3000);
        

        let windowhandles = await browser.getWindowHandles();
        console.log("=================windowHandles======================="+windowhandles);
        console.log('====================================================================================================');
        
        await wlib.switchToWindowParentToChild(parentwindow,windowhandles);

             

        await $("//input[@name='search_text']").setValue(conname);
        await $("//input[@name='search']").click();
        await $("//a[.=' "+conname+"']").click();

        await browser.switchToWindow(parentwindow);

        await browser.pause(1000)

        await cnop.clickOnSaveBtn();

        let opphearder = await oip.getOpportunitiesNameInfo();

        console.log("--------------------------------------------------------->>"+opphearder);

  
    });

    
});