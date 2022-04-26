let wlib = require("../../GenericUtilites/webutility")
let hp = require("../pageobjects/Home/vtigerHomePage")
describe('topickcurrentdate', () => {
    it('currentdate', async() => {

        let d = new Date();

        let montharry = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        let month = montharry[d.getMonth()]
        let year = d.getFullYear()
        let day = 17 //d.getUTCDate()


        
        await browser.url("http://www.leafground.com/pages/Calendar.html")
        
        await $("//input[@id='datepicker']").click()

        await $("//span[.='"+month+"']/following-sibling::span[.='"+year+"']/ancestor::div[@id='ui-datepicker-div']/descendant::a[.='"+day+"']").click()

        await browser.pause(5000);  


       
    });

    it('to check checkbox', async () => {

        await hp.clickOnContactslnk();

        
        let elemntsarry = await $$("//input[@type='checkbox'and @name='selected_id']")

        console.log("----------------------------------------->>>>"+elemntsarry.length);

        // for (const ele of elemntsarry) {
        //     await ele.click();
        //     await browser.pause(500)
        // }

        elemntsarry.forEach(async(ele,index)=>{
            await ele.click();
            await browser.pause(500);
           
        })
        

        let headcheck = await $("//input[@type='checkbox'and @name='selectall']");
        await headcheck.scrollIntoView();
        console.log("is select all checkbox is checked------------------------------>"+await headcheck.isSelected());
        
    });

    it.only('screenshotofcamera', async() => {
        await browser.url("https://www.flipkart.com/canon-eos-m50-mark-ii-mirrorless-camera-ef-m15-45mm-stm-lens/p/itm7a4f536cb1255?pid=DLLGFY7XYG8YFMQT&lid=LSTDLLGFY7XYG8YFMQTSG43XC&marketplace=FLIPKART&q=camera&store=jek%2Fp31&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=c54e0e39-5849-47f7-92fd-5bc611ff9db7.DLLGFY7XYG8YFMQT.SEARCH&ppt=hp&ppn=homepage&ssid=96342rn1e9mllyps1649835923276&qH=dd6d2dcc679d12b9")
        let camimgeles= await $$("//img[@class='q6DClP']/parent::div");

        console.log("---===================---------======================-="+await camimgeles.length);

        await browser.pause(500)
        await $("body").click()

        for (var i=0; i<camimgeles.length; i++){
            
            await camimgeles[i].saveScreenshot("./screenshot/cam"+wlib.systemDateAndTimeInFormat()+".png");
            await browser.pause(500);

            
          
        }

        // for (const camimg of camimgeles) {
        //     await camimg.saveScreenshot("./screenshot/cam"+wlib.systemDateAndTimeInFormat()+".png");
        //     await browser.pause(500);
            
        // }

    });
    
});


// // console.log(d.getMonth());
// // console.log(d.getDay());
// console.log(d.getUTCDate());
// console.log(d.getUTCDay());
// console.log(d.getUTCMonth());