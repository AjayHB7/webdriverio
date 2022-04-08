let  wlib = require("../../../GenericUtilites/webutility")

class CampaignsInfoPage {

    get campaignsHeaderTxt(){
        return $("//span[@class='dvHeaderText']")
    }

    // Business library

    async getCampaignsNameInfo(){
        let camtext = await this.campaignsHeaderTxt.getText();
        return camtext;
    }

}

module.exports = new CampaignsInfoPage();