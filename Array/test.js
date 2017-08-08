
setImmediate(() => {
    console.log('setImmediate1')
    process.nextTick(() => {
        console.log('插1')
    })
    process.nextTick(() => {
        console.log('插2')
        setImmediate(() => {
            console.log('setImmediate3')
        })
        process.nextTick(() => {
            console.log('插3')
        })
    })
})
setImmediate(() => {
    console.log('setImmediate2')
})
// process.nextTick(() => {
//     console.log('nextTick1')
// })
// process.nextTick(() => {
//     console.log('nextTick2')
// })



// setTimeout(function() {
//   console.log('setTimeout1');
//     Promise.resolve().then(function() {
//       console.log('promise1');
//     }).then(function() {
//       console.log('promise2');
//     }).then(function() {
//       console.log('promise3');
//     }).then(function() {
//       console.log('promise4');
//     })
// }, 0);
// setTimeout(function() {
//   console.log('setTimeout2');
//     Promise.resolve().then(function() {
//       console.log('promise5');
//     }).then(function() {
//       console.log('promise6');
//     }).then(function() {
//       console.log('promise7');
//     })
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise0');
// }).then(function() {
//   console.log('promise-1');
// });

// setImmediate(function(){ 
//     console.log(1)
// }, 0)
// setTimeout(function(){ 
//     console.log(2)
// }, 0)
// new Promise(function(resolve){ 
//     console.log(3)
//     resolve()
//     console.log(4)
// }).then(function(){ 
//     console.log(5)
// })
// console.log(6)
// process.nextTick(function(){ 
//     console.log(7)
// })
// console.log(8)



