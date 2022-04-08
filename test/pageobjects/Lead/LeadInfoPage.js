class LeadInfoPage{

    get lastNameHeaderTxt(){
        return $("//span[@class='dvHeaderText']");
    }

    //business library

    async getlastNameInfo(){
        let text = await this.lastNameHeaderTxt.getText();
        return text;
    }
    
}

module.exports = new LeadInfoPage();