class CreateNewOpportunitiesPage {


    // Step:1 Declaration

    get opportunityNameEdt(){
        return $("//input[@name='potentialname']");
    }

    get relatedToEdt(){
        return $("//input[@name='related_to_display']");
    }

    get relatedToDropDn(){
        return $("//select[@name='related_to_type']");
    }

    get typeDropDn(){
        return $("//select[@name='opportunity_type']");
    }

    get campaignSourceEdt(){
        return $("//input[@name='campaignname']");
    }

    get relatedToLookUpBtn(){
        return $("//input[@name='related_to_display']/following-sibling::img");
    }


    get saveBtn(){
        return $("(//input[@title='Save [Alt+S]'])[1]");
    }

    // Step:2 Utilization

    async enterOpportunityName(OpportunityName){
        await this.opportunityNameEdt.setValue(OpportunityName);
    }

    async selectFromRelatedToDropDnByVisibleText(visibletext){
        await this.relatedToDropDn.selectByVisibleText(visibletext)
    }

    async selectFromRelatedToDropDnByVisibleText(visibletext){
        await this.relatedToDropDn.selectByVisibleText(visibletext)
    }

    async clickonrelatedtolookupBtn(){
        await this.relatedToLookUpBtn.click();
    }

    async clickOnSaveBtn(){
        await this.saveBtn.click();
    }

}
module.exports = new CreateNewOpportunitiesPage();