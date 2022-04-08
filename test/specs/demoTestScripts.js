//mocha snippet

// describe('test_suite1', () => {  // inside the describe we write testcases / as per industrial standard inside one discribe only one testcase should be written
//    it('tc_01', () => {  // inside the it we write our testscripts
//     console.log("this is test case 1");
//    });

//    it('tc_02', () => {
//     console.log("this is test case 2");  
//    });

//    it('tc_03', () => {
//     console.log("this is test case 3");   
//    }); 
// });


// to skip the discribe
xdescribe('test_suite2', () => {  // we can x with describe the to skip the suite/discribe

   it.skip('tc_04', () => { // we can use it.skip to skip a it testscript
    console.log("this is test case 4");
   });

   xit('tc_05', () => { // we can use x with it to skip the test script
    console.log("this is test case 5");  
   });

   it('tc_06', () => {
    console.log("this is test case 6");   
   }); 

});





