let didMarksScored = false;
let myPromise = new Promise((resolve, reject) => {
    if(didMarksScored){
        resolve("Shrey Khandelwal");
        console.log("9+ CGPA scored")
    }else{
        console.log("Fail ho gaya")
        reject();
    }
});
myPromise
.then((data) => {
    console.log(`Promise is fulfilled by ${data}`)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() => {
    console.log("Papa marks aa gye")
})