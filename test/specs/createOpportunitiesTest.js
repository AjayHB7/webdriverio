let hp = require("../pageobjects/Home/vtigerHomePage")

describe('createOp', () => {
    it('openopppage', () => {
        hp.clickOnOpportunitieslnk();
        console.log("this is oppertunity page");
    });
});