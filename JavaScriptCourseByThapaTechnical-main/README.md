

ES6 OR ECMAScript 2015
let var const




Arooooooooooow Functions
Type 1
Fat arrow function
// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });

CAN ALSO BE WRTTEN AS 
myFriends.forEach(function(ele,index,array){
  console.log(`${array[element]}`)
})

Type 2
// const sum=()=>{
//   return `the sum of two no is ${(a=1)+(b=6)}`
// }
// console.log(sum());

Type 3
// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });

CALLBACK FUNCTION
const perOne=(friend, callfrnd) => {
  console.log(`I am busy right Now. I am talking to ${ friend}. I will call you back. `);
  callfrnd();
}

const perTwo =() => { 
console.log(`Hey what's up. I call back you dekha.`)
}
perOne("Thapa", perTwo);


ARRAY FUNCTIONS IN JAVASCRIPT
1. IN  //returns the index of ele
2. OF  //returns the ele
3. FOR EACH  CALL BACK  //function for each avery ele
4. INDEX OF    //resturns the least index
5. LASTINDEX OF  //returns the greatest index
6. includes  // checks for given ele in array returns true if found
7. find , findindex  both r  CALL BACK  //  both return only 1 ele 

9. SOrt, reverse
10. splice // takes 3 para splice(position , no of ele to be deleted,"name of ele to be added")

PERFORM CRUD( TOP 2 FUNCTIONS  RETURNS THE LENGTH OF THE ARRAY)
10. PUSH
11. UNSHIFT(PUSH AND UNSHIFT RETURNS THE LENGTH OF ARRAY)
12. POP (POP AND SHIFT RETURNS THE ELEMENT REMOVED)
13. SHIFT

STRING FUNCTIONS IN JAVASCRIPT
1. LENGTH
2. INDEX OF
3. last index of
4. search
5. slice
6. substring
7. substr
//////////////
8. replace
//charat 
charcodeat
.touppercase .tolowercase
concat // console.log(fName.concat(lName));
9. split (converts string to array)
10. trim()  (removes whitespace from both  sides of a string)



# SPLICE METHOD RETURNS THE REMOVED ELE




















