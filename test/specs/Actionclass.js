describe('actions', () => {

    it('moveto', async() => {
        await browser.url("https://webdriver.io/");

        //let Ele = await $("//span[.='Stack Overflow']");
        // await Ele.scrollIntoView();
        // await Ele.moveTo()

        let Ele1 = await $("//button[@class='DocSearch DocSearch-Button']")
        let Ele3 = await $("//input[@class='DocSearch-Input']")

       // let Ele2 = await $("//h3[.='Who is using WebdriverIO?']")

        await Ele1.moveTo();

        await Ele1.click();

        const loc=await Ele3.getLocation()

        const dimension = await Ele3.get 
        console.log(loc);// { x: 408, y: 72 }

        await Ele3.moveTo({xOffset:0,yOffset:272})

        await Ele3.click({ x:0, y:272 }) 

        //await browser.positionClick


        await browser.pause(2000);

       

        


        await browser.pause(5000);

        // await Ele2.scrollIntoView()

        // await Ele2.moveTo();

        // await browser.pause(10000);



    });
    
});