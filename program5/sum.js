async function findSum(n){
    let promise=new Promise((resolve,reject)=>{
        if(isNaN(n)){
            reject("Cannot find sum")
        }
        else{
            let sum=0
            while(n>0){
                sum=sum+(n%10)
                n=Math.floor(n,10)
            }
        }
    })
    return promise
}
async function findRes(n){
    try{
        const res=await findSum(n)
        return res
    }
    catch(err){
        console.log(err)
    }
}
findRes(123)
.then(res=>console.log(res))
.catch(err=>console.log(err))
findRes('sum1')
.then(res=>console.log(res))
.catch(err=>console.log(err))