import {findUserInDb} from "./index1";

findUserInDb(1)
    .then(user => user.name)
    .then(name => console.log(name));

async function run() {
    let user = await findUserInDb(1);
    console.log(user);
    let friend1 = await findUserInDb(user.frined);
    console.log(friend1.name);
    let friend2 = await findUserInDb(friend1.friend);
    console.log(friend2.name);
}

run();