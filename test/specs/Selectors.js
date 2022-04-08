describe('selectors', () => {

    // To get an anchor element with a specific text in it, query the text starting with an equals (=) sign.
    it.skip('linktext', async() => {
        await browser.url('https://www.facebook.com/');
        browser.maximizeWindow();
        const forgotpasswordlink = await $("=Forgotten password?");

        let text= await forgotpasswordlink.getText();
        console.log(text);

        let attribute = await forgotpasswordlink.getAttribute("href");
        console.log("this is attribute of href--------------------------->"+attribute);

    });

    it.skip('partialLinkText', async() => {
        await browser.url('https://www.facebook.com/');
        browser.maximizeWindow();
        const forgotpasswordlink = await $("*=Forgotten");

        let text= await forgotpasswordlink.getText();
        console.log(text);

        let attribute = await forgotpasswordlink.getAttribute("href");
        console.log("this is attribute of partial link text href--------------------------->"+attribute);
        
    });

    // To query an element with a specific tag name, use <tag> or <tag />.
    it.skip('tagName', async() => {
        browser.maximizeWindow();
        await browser.url('https://www.facebook.com/');
        let loginBtn =await $('<button />'); // there should be a space before closing the tag
        let loginBtn1 =await $('<button>'); // this is also an way to use tagname

        console.log(await loginBtn.getText());
    

    });

    it('NameAttribute', async() => {

        browser.maximizeWindow();
        await browser.url('https://www.facebook.com/');

        let usernameEdt = await $('[name="email"]');

        await usernameEdt.setValue("helloo.....");

        await browser.pause(5000);

        console.log("the passed value is ----->"+await usernameEdt.getValue());

    });

    it('moveto', async () => {

        
        
    });
    







    
});