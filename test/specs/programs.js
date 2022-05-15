
// reverese each word in a string
let str = "hello this is Ajay";

let strarr = str.split(" ");
let rstr = ""; 
strarr.forEach((word)=>{
    
    let rword = "";
    for (let i = word.length; i >=0 ; i--) {
       rword+= word.charAt(i);        
    }

    rstr+= rword+" ";

})
console.log(rstr);






