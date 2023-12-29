// let Promice1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('Inside the first TimeOut')
//         resolve()
//     }, 2000);
// })

// Promice1.then(function(){
//     console.log('first Promice is completed')
// })

// return new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log('Inside the second TimeOut')
//         resolve()
//     },3000)
// }).then(function(){
//     console.log('second Promice is completed')
// })

// let userDetails={
//     Name:"Ram",
//     Task:"Your task is completed",
// }

// const PromiceThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('inside the three promice')
//         resolve(userDetails)
//     },2000)
// })

// PromiceThree.then(function(userDetails){
//     console.log(userDetails.Task)
// })

// let errMessage=false
// let promice4=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         if(!errMessage){
//             resolve({
//                 userName:"Nitesh",password:"123456"
//             })
//         }
//         else{
//             reject('ERROR: Something went worng')
//         }
//     }, 4000);
// })

// promice4.then((User)=>{
//     console.log(User.userName)
//     return User.userName
// }).then((userName)=>{
//     console.log(userName)
// }).catch(function(err){
//     console.log(err)
// }).finally(function(){
//     console.log('your code is completed')
// })


let errMessage=true
const PromiceFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        if(!errMessage){
            resolve({
                userName:"javascript",password:"123456"
                })
            }
            else{
                reject('ERROR: JS went worng')
            }
        }, 4000);
})

async function consumePromiceFive(){
    try{
        const response = await PromiceFive; // Indentation fixed
        console.log(response);
    }
    catch(error)
    {
        console.error("Error:", error);
    }
}


consumePromiceFive();