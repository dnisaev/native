import {findUserInDb} from "./index1";

findUserInDb(1)
    .then(user => user.name)
    .then(name => console.log(name));