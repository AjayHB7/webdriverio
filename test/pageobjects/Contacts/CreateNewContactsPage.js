class CreateNewContactsPage{

    // Step:1 Declaration
    get LastNameEdt(){
        return $("//input[@name='lastname']")
    }

    get saveBtn(){
        return $("(//input[@title='Save [Alt+S]'])[1]")
    }

    
    get leadSourceDropDn(){
        return $("//select[@name='leadsource']")
    }

     
    get organizationNameLookUpImg(){
        return $("//input[@name='account_name']/following-sibling::img[@alt='Select']")
    }


    // business library

    async enterLastName(LastName){
        await this.LastNameEdt.setValue(LastName);
    }

    async selectLeadSourceByVisibleText(text){
        await this.leadSourceDropDn.selectByVisibleText(text)
    }

    async selectLeadSourceByIndex(index){
        await this.leadSourceDropDn.selectByIndex(index)  
    }

    async clickOnSave(){
        await this.saveBtn.click();        
    }

    async clickOnOrganizationNameLookUpImg(){
        await this.organizationNameLookUpImg.click();
    }


    async createContactWithLastName(LastName){
        await this.LastNameEdt.setValue(LastName);
    }    

}

module.exports = new CreateNewContactsPage();