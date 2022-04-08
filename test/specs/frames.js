let wlib = require("../../GenericUtilites/webutility")

describe('frames', () => {
    
    it('switchtoframes', async() => {

        await browser.pause(3000)

        await browser.url("https://chercher.tech/practice/frames");

        let frame1 = await $("//iframe[@name='iamframe']")

        await browser.switchToFrame(frame1);

        let frame3 = await $("//iframe[@id='frame3']");

        await browser.switchToFrame(frame3);

        await $("//input[@id='a']").click()

        await browser.pause(3000);

        await browser.switchToParentFrame();

        let textfield = await $("//b[@id='topic']/following-sibling::input"); 

        await textfield.setValue("hello");

        await browser.switchToParentFrame();

        let topictext= await $("//span[.='Not a Friendly Topic']").getText();

        console.log("------------------------------>"+topictext);

        let frame2 = await $("//iframe[@id='frame2']");

        await browser.switchToFrame(frame2);

        let optionsarry = await $$("//select[@id='animals']//option");

        let optiontextarray=[];

        for (const option of optionsarry) {
            let text = await option.getText();
            // await browser.pause(2000)
            optiontextarray.push(text);
        }

        wlib.selectelementfromdropdown(optionsarry,"Big Baby Cat")

        

        console.log("=======================================================================this is the options present in the dropdown of frame 3 "+optiontextarray);

        



        await browser.pause(4000)
        
    }); 
});