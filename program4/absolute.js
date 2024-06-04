async function absolute(n) {
    let promise = new Promise((resolve, reject) => {
        if (Math.abs(n)==n) {
            resolve("Absolute value");
        } else {
            reject("Not an absolute value");
        }
    });
    return promise;
}

async function findRes(n) {
    try {
        const res = await absolute(n);
        return res;  // Return the result so it can be used by the caller
    } catch (err) {
        throw err;  // Rethrow the error so it can be caught by the caller
    }
}

findRes(2)
    .then(res => console.log(res))
    .catch(err => console.log(err));

findRes(-2)
    .then(res => console.log(res))
    .catch(err => console.log(err));