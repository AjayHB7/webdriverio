describe('hidden_divison_popup', () => {
    
    xit('cleartrip', async() => {

        let monthandyear = "April 2022"

        let day = 7
        
        await browser.url("https://www.cleartrip.com/");

        let Departon = await $('(//button[@class="flex flex-middle flex-between t-all fs-2 focus:bc-secondary-500 bg-transparent bc-neutral-100 c-pointer pr-2 pl-3 pt-2 pb-2 ba br-4 h-8 c-neutral-900"])[1]')

        await Departon.click();

        let date = await $("//div[.='"+monthandyear+"']/ancestor::div[@class='DayPicker-Month']/descendant::div[.='"+day+"']")

        await date.click();

        await browser.pause(3000);   

    });

    it('makemytrip.com', async() => {

        let monthandyear = 'April 2022'

        let day = 11

        
        await browser.url("https://www.makemytrip.com/");

        let mmtImg = await $("//img[@alt='Make My Trip']");
        let size = await mmtImg.getSize();

        //console.log("----------------------------------------->>"+size.height);

        await mmtImg.click({x:-5,y:0}); 

        await browser.pause(3000);
                
        await $("//span[.='DEPARTURE']").click();
        
        await browser.pause(1000);

        await $("//div[@class='langCard  fixedCard bounceAni']/descendant::span[@class='langCardClose']").click();

        await browser.pause(2000);

        let date = await $("//div[.='"+monthandyear+"']/ancestor::div[@class='DayPicker-Month']/descendant::p[.='"+day+"']");

        await date.click();

        

        await browser.pause(5000);
        
    });
    
});





