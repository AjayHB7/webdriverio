class OpportunitiesInfoPage{

     // Step:1 Declaration

     get OpportunitiesHeaderTxt(){
        return $("//span[@class='dvHeaderText']");
    }

    //business library
    /**
     * this method will return opportunities header name
     */
    async getOpportunitiesNameInfo(){
        let headertext = await this.OpportunitiesHeaderTxt.getText();
        return  headertext;
    }

}

module.exports = new OpportunitiesInfoPage();