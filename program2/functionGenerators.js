function *gen(){
    yield 1;
    yield 2;
}
const obj1=gen()
const obj2=gen()

console.log(obj1.next().value)
console.log(obj2.next().value)

console.log(obj1.next().value)
console.log(obj2.next().value)

console.log(obj1.next().value)
console.log(obj2.next().value)

