class ContactsPage{

    // Step:1 Declaration

    get createContactLookUpImg(){
        return $("//img[@title='Create Contact...']");
    }

     // Step:2 Utilization

     /**
      * this method will click on create contact lookup button
      */
    async clickOnCreateContactLookUpImg(){
        
        await this.createContactLookUpImg.click();

    }
}

module.exports = new ContactsPage();