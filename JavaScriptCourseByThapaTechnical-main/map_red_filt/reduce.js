// const arr=[1,2,3,4,5,6]
// function fin(array){
//     let sum=0
//     for(var i=0;i<array.length;i++){
//         sum= sum+array[i]
//     }
//     return sum

// }
// console.log(fin(arr))


// const output= arr.reduce((acc,curr)=>{
//     if (curr>acc){
//         acc=curr;
//     }
//     return acc

// },0)
// console.log(output)


const users=[
    {name:"rithin",lname:"menezes",age:89},
    {name:"ram",lname:"raju",age:25},
    {name:"ramu",lname:"yadav",age:65},
    {name:"rakesh",lname:"kohli",age:65},
  ]


const output2=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]+=acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc

},{})
console.log(output2)

