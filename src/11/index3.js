import {findUserInDb} from "./index1";

const promise2 = findUserInDb(1);

const promise2_2 = promise2.then(user => console.log(user));

console.log(promise2_2);

const promise2_22 = promise2.then(user => user.name);
promise2_22.then(name => console.log(name));

findUserInDb(1)
    .then(user => user.name)
    .then(name => console.log(name));

axios.get('https://google.com')
    .then(response => response.data)
    .then(data => console.log(data))

const getVacanciesCountFromGoogle = () => {
    //const promise = axios.get('https://google.com');
    //const promise2 = promise.then(response => response.data);
    //return promise2;

    return axios.get('https://google.com')
        .then(res => res.data)
        .then(data => data.vacancies)
};

getVacanciesCountFromGoogle()
     .then(count => console.log(count))
