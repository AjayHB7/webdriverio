describe('booking', () => {

    it('flipkart', async() => {

        browser.url("https://www.flipkart.com/travel/flights")

        

        let month = "April"
        let year = 2022
        let day = 15

        await browser.pause(2000)

        let dep = await $("//input[@class='_1w3ZZo _2gKfhi _1WPSB8 _2mFmU7']");

        await browser.pause(2000)

        dep.waitForDisplayed();

        await dep.click()

        console.log();

        await browser.debug()

        await $("//div[.='"+month+" "+year+"']/ancestor::table[@class='aSgzfL']/descendant::button[.='"+day+"']").click

        await browser.pause(5000)

    });
    
});


