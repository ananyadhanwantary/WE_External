const operation=(a,b)=>{
    return [a+b,a-b,a*b,a/b,Math.pow(a,b),a==b]
}
const[add,min,...theRest]=operation(2,2)
console.log(add,min,theRest)

const arr1=[1,2,3]
const arr2=[4,5,6]
const arr=[...arr1,...arr2]
console.log(arr)