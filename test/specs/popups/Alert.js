describe('alerts', () => {
    xit('alert_ok', async() => {

       await browser.url("https://demoqa.com/alerts");

       let alertBtn = await $("//button[@id='alertButton']")

       await alertBtn.scrollIntoView();

       await alertBtn.click();

       await browser.pause(2000);

       await browser.acceptAlert();

       await browser.pause(2000);
        
    });

    xit('alert_ok_and_dimiss', async () => {

        await browser.url("https://demoqa.com/alerts");

        let alertBtn = await $("//button[@id='confirmButton']");

        await alertBtn.scrollIntoView();

        await alertBtn.click();

        await browser.pause(2000)

        await browser.acceptAlert();

        await browser.pause(2000);

        await alertBtn.click();

        await browser.pause(2000);

        await browser.dismissAlert();

        await browser.pause(2000);
        
    });

    it('sendAlertText', async() => {

        await browser.url("https://demoqa.com/alerts");

        let alertBtn = await $("//button[@id='promtButton']");

        await alertBtn.scrollIntoView();

        await alertBtn.click();

        await browser.pause(2000);

        await browser.sendAlertText("message");
        
        await browser.pause(2000);

        await browser.debug();

        console.log(await browser.getAlertText());

        await browser.acceptAlert();
        
        await browser.pause(2000);
        
    });
    
});





