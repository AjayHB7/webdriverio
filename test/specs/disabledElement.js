describe('handling_disabled_element', () => {
    it('disabled_element', async() => {
        await browser.url("http://127.0.0.1:5500/test/specs/disabledElement.html");

        let fnameEdt= await $("//input[@id='fname']");

        let lnameEdt= await $("//input[@id='lname']");

        await fnameEdt.setValue("Ajay");

        console.log(await fnameEdt.getValue());

        await browser.execute(()=>{
            document.getElementById('lname').setAttribute("value","Kumar");

        })

        await browser.debug();

        console.log(await lnameEdt.getValue());
        
    });
    
});