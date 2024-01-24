// console.log('start');

// findUserInDb(1)
//     .then(user => console.log(user.name))

function getNumber() {
    // return Promise.resolve(Math.random());
    return new Promise((resolve, reject) => {
        reject('error');
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    });
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

// console.log('finish')