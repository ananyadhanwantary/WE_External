const person={
    name:"John",
    age:30,
    address:{
        city:"Hyderabad",
        pin:500026
    }
}
const {name,age,address:{city,pin}}=person
console.log(name)
console.log(age)
console.log(city)
console.log(pin)

const arr=[1,2,3]
const [a,b,c]=arr
console.log(a,b,c)
