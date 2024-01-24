const resolvedPromise = Promise.resolve([{}]);
console.log(resolvedPromise);

resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const rejectedPromise = Promise.reject({message: 'error'});
console.log(rejectedPromise);

rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'First'}, {name: 'Second'}])
    },
    login(login, password) {
        if (login !== 'login' && password !== 'password') {
            return Promise.reject({message: 'error'})
        } else {
            return Promise.resolve({name: 'First', id: 1})
        }
    }
}

const promise = usersAPI.getAllUsers()
promise
    .then(users => console.log(users))
    .catch(error => console.warn(error))

usersAPI.login('login', 'pwd')
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })