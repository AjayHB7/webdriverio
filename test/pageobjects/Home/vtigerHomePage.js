class VtigerHomePage{

    // Step:1 Declaration

    get administratorLookUpImg(){
        return $("//img[@src='themes/softed/images/user.PNG']");
    }

    get signOutBtn(){
        return $("//a[. = 'Sign Out']");
    } 

    get contactslnk(){
        return $("//a[.='Contacts']");
    }

    get leadslnk(){
        return $("//a[.='Leads']");
    }

    get opportunitieslnk(){
        return $("//a[.='Opportunities']");
    }

    get Morelnk(){
        return $("//a[.='More']");
    }

    get Campaignslnk(){
        return $("//a[.='Campaigns']")
    }

    
    // Step:2 Utilization

    async hoverOverAdministratorLookUpImg(){
        await this.administratorLookUpImg.moveTo();

    }

    async clickOnSignOutBtn(){
        await this.signOutBtn.waitForDisplayed();
        await this.signOutBtn.click();
    }

    async clickOnContactslnk(){
        await this.contactslnk.click();
    }

    async clickOnLeadslnk(){
        await this.leadslnk.click();
    }
    
    async clickOnOpportunitieslnk(){
        await this.opportunitieslnk.click();
    }

    async clickOnMorelnk(){
        await this.Morelnk.click()
    }

    async clickOnCampaignslnk(){
        await this.Morelnk.moveTo();
        await this.Campaignslnk.waitForDisplayed();
        await this.Campaignslnk.click();
    }
    

    // business library

    async logoutOfApplication(){
        await this.hoverOverAdministratorLookUpImg();
        console.log("hovering on the administrator lookup img");

        await browser.pause(1000)

        await this.clickOnSignOutBtn();
        console.log("clicked on signout button");
    }

}

module.exports= new VtigerHomePage()