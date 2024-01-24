// findUserInDb(3)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendId => findUserInDb(friendId))
//     .then(friend1 => {
//         console.log(friend1.name);
//         return friend1.friend
//     })
//     .then(friendID => findUserInDb(friendID))
//     .then(friend2 => {
//         console.log(friend2.name)
//         return friend2.friend
//     })
//     .catch(error => console.warn(error))

async function run (){
    try {
        let user = await findUserInDb(3)
        console.log(user.name)
        let friend1 = await findUserInDb(user.friend)
        console.log(friend1.name)
        let friend2 = await findUserInDb(friend1.friend)
        console.log(friend2.friend)
    } catch (error) {
        console.log(error)
    }
}

run()

function findUserInDb(id) {

    let users = [
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
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}