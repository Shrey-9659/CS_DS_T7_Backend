let random = Math.ceil(Math.random() * 10);
let promiseOne = new Promise((resolve, reject) => {
    if(random%2 == 0){
        console.log("The number is even : "+ random)
        resolve("Shrey")
    }else{
        console.log("The number is odd : "+ random)
        reject("Error")
    }
});
promiseOne
.then((name) => {
    console.log(`Coming from resolved by ${name}`)
})
.catch((error) => {
    console.log(error)
    console.log("Coming from rejected")
})
.finally(() => {
    console.log("I will run all the time")
})
