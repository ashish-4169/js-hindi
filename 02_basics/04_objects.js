//   MERGING THE TWO OBJECTS;

const obj1={
    1:"a",2:"b",3:"c"
}
const obj2={
    4:"a",5:"b",5:"c"
}
// 1__>>> Object.assign()

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

// 2--->>> by using the spread operator
const obj4={...obj1,...obj2}
console.log(obj4)


/// GETTING THE KEYS AND VLAUES IN FORM OF ARRAY FROM THE OBJECTS

console.log(Object.keys(obj3))
console.log(Object.values(obj3))



/// DE-STRUCTURING OF THE OBJECTS

const course ={
    name:"Ashish@cc",
    price:"9999",
    courseInstructor:"Ashish"
}

const {courseInstructor : instructor} =course
console.log(instructor);
