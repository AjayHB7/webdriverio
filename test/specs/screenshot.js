const { assert } = require("chai");
let wlib = require("../../GenericUtilites/webutility")
describe('screenshots', () => {

    it('screenshotWithGoogle', async () => {

        let search = "giraffe"

        await browser.url("https://www.google.com/");

        await $("//input[@title='Search']").setValue(search);

        await browser.keys("Enter");

        await assert.fail("i am failing here")

        await $("//a[.='Images']").click();

        await browser.pause(2000);

        // await browser.takeScreenshot();
        let data_time= wlib.systemDateAndTimeInFormat()

        await browser.saveScreenshot("./screenshot/"+search+"-"+data_time+".png")

       
        

    });
    
});





        





