class OpportunitiesPage{

    // Step:1 Declaration

    get createOppLookUpBtn(){
        return $("//img[@title='Create Opportunity...']");
    }

     // Step:2 Utilization

    async clickOnCreateOppLookUpBtn(){
        await this.createOppLookUpBtn.click();
    }
}

module.exports= new OpportunitiesPage();