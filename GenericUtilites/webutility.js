class Webutil {

    async selectelementfromdropdown(elementsarray, matchtext) {
        //let elementsArray = await $$("//select[@id = 'qccombo']//option")
        //let textarray = []
        for (const element of elementsarray) {
            let text = await element.getText()
            
            //textarray.push(text)
           // console.log('===============text of the element================'+text);


            if (text == matchtext) {
                await element.click()
                break
            }
        }
        
    }


    /**
     * this method will switch from parentwindow to child window based on the actual complete title
     * @param {*} windowhandles 
     * @param {*} title 
     */
    async switchToWindowByTitle(windowhandles,title){

        for (const window of windowhandles) {
            browser.switchToWindow(window)
            let acttitle = browser.getTitle();
            if(acttitle==title){
                break;
            }
            
        }     
    }

    /**
     * this method will switch from parentwindow to child window based on the partial title
     * @param {*} windowhandles 
     * @param {*} PartialTitle 
     */
    async switchToWindowByPartialTitle(windowhandles,PartialTitle) {

        for (const window of windowhandles) {
            browser.switchToWindow(window)
            let acttitle = browser.getTitle();
            if(acttitle.includes(PartialTitle)){
                break;
            }
        }        
    }

    /**
     * this method will switch from parentwindow to child window(work only when we have one child) 
     * @param {*} parentwindow 
     * @param {*} windowhandles 
     */
    async switchToWindowParentToChild(parentwindow,windowhandles){
        for (const window of windowhandles) {
            await browser.switchToWindow(window)
            if(!(window == parentwindow)){
                break;
            }
            
        }     
    }

    

        
    randomnumber () {

        let randomnumber = Math.floor((Math.random() * 1000));
        return randomnumber;
    }

    systemDateAndTimeInFormat(){

        let date = new Date()
        // console.log(date.toDateString());
        // console.log(date.toTimeString());
        let dmy =date.toDateString()
        let systime =date.toTimeString()
        let dmyar=dmy.split(" ");
        // console.log(dmyar);
        let DateInFormat = dmyar[1]+"-"+dmyar[2]+"-"+dmyar[3]
        // console.log(DateInFormat);
    
        // time 
        let timeary = systime.split(" ")
        // console.log(timeary);
        let Timearry = timeary[0].split(":")
        // console.log(Timearry);
        let Time = Timearry[0]+"-"+Timearry[1]+"-"+Timearry[2];    
        let DateInFormat_Time = DateInFormat+" "+Time;
        // console.log(DateInFormat_Time)
    
        return DateInFormat_Time;
        
    }


}

module.exports = new Webutil();