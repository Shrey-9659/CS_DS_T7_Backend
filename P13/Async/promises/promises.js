let promiseResolved = false;
let promiseOne = new Promise((resolve, reject) => {
    if(promiseResolved){
        resolve("Shrey");
        console.log("Promise is resolved")
    }else{
        console.log("Promise is rejected")
        reject();
    }
});
promiseOne
.then((name) => {
    console.log(`Coming from resolved by ${name}`)
})
.catch(() => {
    console.log("Coming from rejected")
})
.finally(() => {
    console.log("I will run all the time")
})
