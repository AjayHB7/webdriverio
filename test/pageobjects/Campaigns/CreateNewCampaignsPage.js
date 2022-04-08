class CreateNewCampaignsPage{

    get CampaignNameEdt(){
        return $("//input[@name='campaignname']");
    }

    get saveBtn(){
        return $("//input[@title='Save [Alt+S]']");
    }

    async enterCampaignName(CampaignName){
        await this.CampaignNameEdt.setValue(CampaignName);
    }

    async clickOnSaveBtn(){
        await this.saveBtn.click();
    }

}

module.exports = new CreateNewCampaignsPage();