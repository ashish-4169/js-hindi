// singleton--->Object.create---->abhi nhi padh rhe hai

// object literals
const mySym= Symbol("key1")

const user={
    name:"Ashish",
    [mySym]:"mykey",
    "full_name":"Ashish Kumar",
    age:19,
    location:"ballia",
    email:"ashish04iota@gmail.com",
    check:false,
    lastLoginDays:["monday","saturday"]
}

// object ko access krne k 2 tarike hai
console.log(user.age)
console.log(user["email"])
console.log(user["full_name"])
console.log(user)
