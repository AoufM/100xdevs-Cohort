/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const p=new Promise((res,rej)=>{
        for (let i = 0; i < 10000000; i++) {
            const beforeTime= Date.now();
            if (milliseconds===Date.now-beforeTime) {
                break;
            }
        }
        res();
    })
    return p;
}

module.exports = sleep;
