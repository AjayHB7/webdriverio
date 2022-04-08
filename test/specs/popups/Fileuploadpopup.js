describe('fileupload', () => {

    it('upload', async () => {

        await browser.url("https://opensource-demo.orangehrmlive.com/")

        await $("//input[@name='txtUsername']").setValue("admin");

        await $("//input[@name='txtPassword']").setValue("admin123");

        await $("//input[@name='Submit']").click();

        await browser.url("https://opensource-demo.orangehrmlive.com/index.php/pim/viewMyDetails");

        const addbtn = await $("//input[@id='btnAddAttachment']");

        await addbtn.scrollIntoView();
        
        await addbtn.click();

        const browseBtn = await $("//input[@id='ufile']");

        const path = "C:/Users/user/Desktop/file to upload.txt";
        
        await browseBtn.setValue(path);

        await browser.pause(3000)

        const uploadbtn = await $("//input[@name='btnSaveAttachment']");

        await browser.pause(3000)

        await uploadbtn.click();

        await browser.pause(3000); 
        
    });
    

});