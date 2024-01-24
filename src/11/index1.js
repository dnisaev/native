const axios = {
    _fake(url, data) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let responseData = {
                    test: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft')) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(2, 5) * 1000)
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
};
const findUserInDb = (id) => {

    const users = [
        {id: 1, name: "First", friend: 3},
        {id: 2, name: "Second", friend: null},
        {id: 3, name: "Third", friend: 2}]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user == null) {
                reject('user not found')
            } else {
                resolve(user);
            }
        }, randomIntFromInterval(1000, 3000))
    })
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const promise1 = axios.get('https://google.com');

promise1.then((data) => {
    console.log(data)
});

const promise2 = findUserInDb(1);
console.log(promise2)
promise2
    .then((user) => {
        console.log(promise2)
        console.log(user)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finish')
    })

const otherPromise = Promise.all([promise2, promise1]);
const otherPromise2 = Promise.allSettled([promise2, promise1]);

otherPromise
    .then((results) => {
        console.log(results)
        const dataFromGoogle =
            results[0].status === 'fulfilled'
                ? results[0].value
                : {data: {vacancies: null}};
        const userFromDB =
            results[1].status === 'fulfilled'
                ? results[1].value
                : {name: results[1].reason};
        console.log(`${dataFromGoogle} ${userFromDB}`)
    })

otherPromise2
    .then((results) => {
        const dataFromGoogle = results[0];
        const userFromDB = results[1];
        console.log(`${dataFromGoogle} ${userFromDB}`)
    })
    .catch(() => {
        console.log('failed')
    })