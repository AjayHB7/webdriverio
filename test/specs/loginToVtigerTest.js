describe.only('createcontact', () => {
    it('contact', async() => {
        // using promise and timer to wait for some time
        await new Promise((reslove,reject)=>{
            setTimeout(()=>{
                reslove("waiting....");                
            },20000)
            
        }).then((msg)=>{console.log(msg);})       
        
        console.log("creating contacts");  
    });
    
});