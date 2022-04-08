class CampaignsPage {

    get createCampaignsLookUpImg(){
        return $("//img[@title='Create Campaign...']");
    }

    // business library

    async clickOnCreateCampaignsLookUpImg(){
        await this.createCampaignsLookUpImg.click();
    }
    
}

module.exports = new CampaignsPage();