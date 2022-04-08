describe('mouseactions', () => {

    it('mouseaction', async () => {
        await browser.url("https://unixpapa.com/js/testmouse.html");

        let click = await $("//a[.='click here to test']");

        await browser.pause(5000);

        await click.click();

        await browser.pause(5000);

        await click.doubleClick();

        await browser.pause(5000);
    });

    it('', () => {
        
    });
    
});