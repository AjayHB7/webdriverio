class leadPage{

    get createLeadLookUpImg(){
        return $("//img[@title='Create Lead...']")
    }

    // business library

    async clickOnLeadLookUpImg(){
        await this.createLeadLookUpImg.click();
    }
}

module.exports = new leadPage();