class CreateNewLeadPage{

    get lastNameEdt(){
        return $("//input[@name='lastname']");
    }

    get companyEdt(){
        return $("//input[@name='company']");
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']")
    }

    get leadsorceDrpDwn(){
        return $("//select[@name='leadsource']")
    }



    // Business library

    async enterLastName(LastName){
        await this.lastNameEdt.setValue(LastName);
    }

    async enterCompanyName(company){
        await this.companyEdt.setValue(company);
    }

    async clickOnSave(){
        await this.saveBtn.click();
    }

    async selectLeadsorceDrpdwnByVisibleText(visibletext){
        await this.leadsorceDrpDwn.selectByVisibleText(visibletext)
    }
}

module.exports = new CreateNewLeadPage();