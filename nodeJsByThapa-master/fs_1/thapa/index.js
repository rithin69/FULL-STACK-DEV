// Challenge Time

//  1: Create a folder name it Thapa
//  2: Create a file in it named bio.txt and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder

//include fs module 
// var fs=require("fs")


// To create a folder: thapa 
// fs.mkdir("thapa",(err) => {
// 	if (err) {
// 		return console.error(err);
// 	}
//     else{
// 	console.log('Directory created successfully!'); }
// });


// // to create a file
// fs.openSync("bio.txt","w+")

// //Create a file in it named bio.txt and data into it.
// fs.writeFileSync("bio.txt", "Welcome back to my channel rithin technical");


// // we can append the data at the end
// fs.appendFileSync("bio.txt"," guys now its a challenge time for you to do the same");


// //// Read the data without getting the buffer data at first.
// let data = fs.readFileSync("mybio.txt","UTF-8");
// let data = fs.readFileSync("mybio.txt");


// // data buffer we get, we use toString to get the original string back
// data = data.toString();
// console.log(data);

// // we can rename the file
// // 1st para old name , 2nd para new name 
// fs.renameSync("bio.txt", "mybio.txt");

// // to remove a file
// fs.unlinkSync("mybio.txt");

// // to remove a directory
// fs.rmdirSync("thapa");

// // we can also check the file path
// console.log(fs.realpathSync("mybio.txt"));


