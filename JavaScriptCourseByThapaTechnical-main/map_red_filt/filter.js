const arr=[5,1,3,2,6]
 
function isodd(x){
    return x%2!=0;
}
const output=arr.filter(isodd)
console.log(output)

const out=arr.filter((x)=>
{
    return x%2!=0
})
console.log(out)

// const users=[
//     {name:"rithin",lname:"menezes",age:89},
//     {name:"ram",lname:"raju",age:25},
//     {name:"ramu",lname:"yadav",age:65},
//     {name:"rakesh",lname:"kohli",age:65},
//   ]

// const output3=users.filter((x)=>{
//    return x.age>30

// }).map((x)=>{
//     return x.name
// })
// console.log(output3)