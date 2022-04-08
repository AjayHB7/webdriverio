let xlsx = require("xlsx");

// // read the excelfile and create workbook
// let workbook = xlsx.readFile("./projectdata.xlsx")

// // to get all excel sheetnames in the excel file
// let sheetnames= workbook.SheetNames
// console.log(sheetnames); // it will print array of sheetname

// let worksheet = workbook.Sheets["Sheet1"] // sheets is an array

// console.log(worksheet);// this data is not readable/usable

// // converting xcel into json

// let derivedData = xlsx.utils.sheet_to_json(worksheet);

// console.log(derivedData); // this will print array of json objects

// console.log(derivedData[0].url);
// console.log(derivedData[0].username);
// console.log(derivedData[0].password);



function readExcelData(filePath,sheetName) {

 let workbook = xlsx.readFile(filePath);

 let worksheet = workbook.Sheets(sheetName);

 let derivedData = xlsx.utils.sheet_to_json(worksheet);

 return derivedData;
    
}

module.exports = readExcelData



