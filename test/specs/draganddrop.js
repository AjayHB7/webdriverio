describe('drganddrp', () => {

    it('drganddrop', async() => {

        await browser.url("https://www.globalsqa.com/demo-site/draganddrop/");

        await browser.deleteAllCookies();

        let frame1 = await $("//iframe[@class='demo-frame lazyloaded']");

        await browser.switchToFrame(frame1);

        let ele1 = await $("//img[@src='images/high_tatras_min.jpg']");

        let ele2 = await $("//img[@src='images/high_tatras2_min.jpg']");

        let ele3 = await $("//img[@src='images/high_tatras3_min.jpg']");

        let ele4 = await $("//img[@src='images/high_tatras4_min.jpg']");

        let target = await $("//div[@id='trash']");

        await ele1.dragAndDrop(target);
        await browser.pause(2000);
        
        await ele2.dragAndDrop(target);
        await browser.pause(2000);

        await ele3.dragAndDrop(target);
        await browser.pause(2000);

        await ele4.dragAndDrop(target);
        await browser.pause(2000);  
        
        await browser.switchToParentFrame();

        let searchEdt = await $("//input[@placeholder='Search...']");

        await searchEdt.setValue("bye....");

        await browser.keys(["Control","a"]);
        
        await browser.pause(3000);

        await browser.keys("Enter");

        await browser.pause(5000);



    });
    
});