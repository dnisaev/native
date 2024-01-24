setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 3000);

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000);
    }, 1000);
}, 1000);

function wait(ms) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

async function run(){
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run();
