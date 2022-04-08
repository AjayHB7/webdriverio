
describe.skip('launch_suite', () => {
    it('navigate_to_amazon', async () => {
        await browser.url("https://amazon.in")

        let title=await browser.gettitle
        console.log("title of webpage is"+title);
        
        await expect(browser).toHaveUrlContaining("amazon")

        await expect(browser).toHaveTitleContaining("Online")


    });


});