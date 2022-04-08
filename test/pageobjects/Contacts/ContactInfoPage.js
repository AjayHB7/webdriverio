class ContactsInfoPage{

    // Step:1 Declaration
    get contactsHeaderTxt(){
        return $("//span[@class='dvHeaderText']")
    }

    // business library
    /**
     * this method will return text diplayed on the element      
     **/
    async getContactNameInfo(){
       return await this.contactsHeaderTxt.getText();
    }
}

module.exports = new ContactsInfoPage();
