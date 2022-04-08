class VtigerLoginPage{

    // Step:1 Declaration
    get userNameEdt(){
        return $("//input[@name='user_name']");      
    }

    get passwordEdt(){
        return $("//input[@name='user_password']");     
    }

    get submitBtn(){
        return $("#submitButton");       
    }

    // Step:2 Utilization

    async enterUsername(UserName){
        await this.userNameEdt.setValue(UserName);
    }

    async enterPassword(Password){
        await this.passwordEdt.setValue(Password);
    }

    async clickOnLoginBtn(){
        await this.submitBtn.click();
    }



    // Business library

    async loginToApplication(UserName,Password){

        await browser.url("http://localhost:8888/") // we can also use navigateTo

        await this.enterUsername(UserName);
        console.log("username entered");
        await this.enterPassword(Password);
        console.log("password entered");
        await this.clickOnLoginBtn();
        console.log("loginbutton clicked");

    }
}

module.exports= new VtigerLoginPage();

