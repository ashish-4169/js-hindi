const marvel_heros=["spiderman","ironman", "thor"]
const dc_heroes=["batman", "flash", "superman"]

const all=marvel_heros.concat(dc_heroes)
console.log(all)

// using the spread operator

const all_new=[...marvel_heros, ...dc_heroes]
console.log(all_new)


// use of flat
const new_arr=[1,2,3,[4,5,6,[7,8]]]
const real_new_arr=new_arr.flat(Infinity)
console.log(real_new_arr)


// finding and making array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
