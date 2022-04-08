
describe('assertionpractice', () => {

    it.skip('assert', async () => {
    //    await browser.getUrl("https://www.amazon.in/");

    //    var title = await browser.getTitle();

    //    var url = await browser.getUrl();

    //    console.log(title);

    //    console.log(url);

    //    await expect(browser).toHaveUrlContaining("amazon");

    //    await expect(browser).toHaveTitleContaining("a")
        
    });

    it.skip('browsermatchers', async() => {

        // browser.maximizeWindow();
        // await browser.url("https://www.amazon.in/")

        // // url

        // let acturl=await browser.getUrl();
        // console.log("url------>>"+acturl);

        // // toHaveUrl
        // //await wdioExpect(browser).toHaveUrl("https://www.amazon.in/");

        // // toHaveUrlContaining
        // console.log(await wdioExpect(browser).toHaveUrlContaining("amazon"));

        // // title

        // let actTitle = browser.getTitle();
        // console.log("title----->>"+actTitle);

        // // toHaveTitle

        // await wdioExpect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")

        // // toHaveTitleContaining

        // await wdioExpect(browser).toHaveTitleContaining("Shopping site in India");

    });

    it('elementmatchers', async() => {
        browser.maximizeWindow();
       await browser.url("https://www.facebook.com");

       const userNameEdt = await $("//input[@name='email']");

       const developerlink = await $("//a[text()='Developers']")

       const passwordEdt = await $("//input[@type='password']")

    //     // toBeDisplayed
    //    await wdioExpect(userNameEdt).toBeDisplayed();

    //     console.log("---------------------------------------------------------------------------");

    //    //toExist
    //    await wdioExpect(userNameEdt).toExist();
       
    //    console.log("---------------------------------------------------------------------------");

    //    //toBePresent

    //    await wdioExpect(userNameEdt).toBePresent();

    //    console.log("---------------------------------------------------------------------------");

    //    //toBeExisting

    //    await wdioExpect(userNameEdt).toBeExisting();

    //    console.log("---------------------------------------------------------------------------");


      //toBeFocused       

    //    await passwordEdt.click();

    //    browser.pause(1000);

    //    await wdioExpect(passwordEdt).toBeFocused();

    //    // toHaveAttribute/toHaveAttr

    //    await developerlink.scrollIntoView();

    //    await wdioExpect(developerlink).toHaveAttribute("title","Develop on our platform.")

    // toHaveAttributeContaining/toHaveAttrContaining

    //    await developerlink.scrollIntoView();

    //    await wdioExpect(developerlink).toHaveAttributeContaining("title","Develop on our") // attibute name should be exact

    // toHaveElementClass-  Checks if an element has a certain class name.//?????

    //await wdioExpect(passwordEdt).toHaveElementClass('inputtext _55r1 _6luy _9npi', { message: 'Not a form control!', })


    // toHaveElementClassContaining- Checks if an element has a certain class name that contains provided value.

    //await wdioExpect(passwordEdt).toHaveElementClassContaining("inputtext _55r1 _6luy _9npi");

    // toHaveId
    //await wdioExpect(passwordEdt).toHaveId("pass");

    // toHaveText

    // await developerlink.scrollIntoView();

    // await wdioExpect(developerlink).toHaveText("Developers");


    // toHaveTextContaining

    // await developerlink.scrollIntoView();

    // await wdioExpect(developerlink).toHaveTextContaining("Devel");




    // toBeDisplayedInViewport

    //await wdioExpect(developerlink).toBeDisplayedInViewport(); // failed = Received: "not displayed in viewport"

    // await developerlink.scrollIntoView();

    // await browser.pause(3000);

    // await wdioExpect(developerlink).toBeDisplayedInViewport(); //passed


    // function randomnumber () {
    //     return Math.floor((Math.random() * 1000));
    // }
      
    // moveto

    

    await browser.pause(3000);


     
    




    



   

  




    

    
       


    });





});