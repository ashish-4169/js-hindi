// stack ----> primitive-----> value copy 
// heap ----->non primitive-----> refrence

let myname="Ashish"
let othername=myname
othername="kumar"

console.log(myname)
console.log(othername)


// for non primitive value is by reference

let userone={
    email:"ashish04iota@gmail.com",
    upi:"canarabank@upi.com"
}
let usertwo=userone
usertwo.email="ashish@03iota@gmail.com"
console.log(userone)
console.log(usertwo)

