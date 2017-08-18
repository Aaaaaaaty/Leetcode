
// setImmediate(function() {
//     console.log('setImmediate1')
//     process.nextTick(function() {
//         console.log('插1')
//     })
//     process.nextTick(function() {
//         console.log('插2')
//     })
// })
// setImmediate(function() {
//     console.log('setImmediate2')
//     process.nextTick(function() {
//         console.log('插3')
//     })
// })

// process.nextTick(function() {
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
//     })
// }, 0);
// setTimeout(function() {
//   console.log('setTimeout2');
//     Promise.resolve().then(function() {
//       console.log('promise3');
//     }).then(function() {
//       console.log('promise4');
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
// setImmediate(function (){
//   setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
//   });
// });
// setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
// }, 0);

// const fs = require('fs');

// function someAsyncOperation(callback) {
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;
//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// someAsyncOperation(() => {
//   for(var i = 0; i < 10000; i++) {
//   }
// })
// var post = [{"key":"module","value":"mythreadflow","description":""},{"key":"app_id","value":"10020","description":""},{"key":"user_id","value":"4546117","description":""},{"key":"access_token","value":"4e4553a10fbc42128d52166d1c509416","description":""},{"key":"sign","value":"6dab9bcc10187c55166f569c12e99b77","description":""},{"key":"version","value":"2","description":""},{"key":"bind_fids","value":"20","description":""},{"key":"downoffset","value":"0","description":""},{"key":"adid","value":"8D2A96A8-1C5F-46DA-AFAA-20C58F10CEA0","description":""},{"key":"appversion","value":"6.0.0","description":""},{"key":"centertype","value":"new","description":""},{"key":"channelId","value":"1","description":""},{"key":"fid","value":"2","description":""},{"key":"mac","value":"d41d8cd98f00b204e9800998ecf8427edae2d80d","description":""},{"key":"openudid","value":"d41d8cd98f00b204e9800998ecf8427edae2d80d","description":""},{"key":"os_type","value":"ios","description":""},{"key":"sort_type","value":"1","description":""},{"key":"type","value":"1","description":""},{"key":"vendorid","value":"C901C948-70C8-4B0E-8272-D756E2AFF8A9","description":""},{"key":"deviceId","value":"8D2A96A8-1C5F-46DA-AFAA-20C58F10CEA0","description":""},{"key":"bind_fids","value":"211","description":""}]
// var url = 'http://bbs.laohu.com/api/laohuapp/index.php'
// var changeGet = function(url, post) {
//     var str = ''
//     post.forEach(function(item, index) {
//         if(index < post.length - 1) {
//             str += item.key + '=' + item.value + '&'
//         } else {
//             str += item.key + '=' + item.value
//         } 
//     }) 
//     // console.log(url + '?' + str)
// }
// changeGet(url, post)
// var appkey10020 = 'uEvdTDXx7q1mtFwk9pHGNCXb1JilUKTP'
// var appkey1000 = '54f4dfb8d47a015ccdb5f60a5b750483'
// var str = ''
// var arr = ['access_token', 'app_id', 'channelId', 'deviceId', 'mac', 'openudid', 't', 'user_id', 'vendorid']
// var post = [{"key":"module","value":"mythreadflow","description":""},{"key":"app_id","value":"10020","description":""},{"key":"user_id","value":"4546117","description":""},{"key":"access_token","value":"e55083afabcb4fd9ba632409da8d7245","description":""},{"key":"sign","value":"9a0480cc5a4acc9d8d580f62d9249994","description":""},{"key":"version","value":"2","description":""},{"key":"bind_fids","value":"20","description":""},{"key":"downoffset","value":"0","description":""},{"key":"adid","value":"8D2A96A8-1C5F-46DA-AFAA-20C58F10CEA0","description":""},{"key":"appversion","value":"6.0.0","description":""},{"key":"centertype","value":"new","description":""},{"key":"channelId","value":"1","description":""},{"key":"fid","value":"2","description":""},{"key":"mac","value":"d41d8cd98f00b204e9800998ecf8427edae2d80d","description":""},{"key":"openudid","value":"d41d8cd98f00b204e9800998ecf8427edae2d80d","description":""},{"key":"os_type","value":"ios","description":""},{"key":"sort_type","value":"1","description":""},{"key":"type","value":"1","description":""},{"key":"vendorid","value":"C901C948-70C8-4B0E-8272-D756E2AFF8A9","description":""},{"key":"deviceId","value":"8D2A96A8-1C5F-46DA-AFAA-20C58F10CEA0","description":""}]
// arr.forEach((item, index) => {
//   post.forEach((obj, index) => {
//     if(item === obj.key) {
//       str += obj.value
//     }
//   })
// })
// str += appkey10020
// console.log(str)
// var postLogin = [{"key":"appId","value":"10020","description":""},{"key":"username","value":"15116936473","description":""},{"key":"password","value":"123456","description":""},{"key":"deviceId","value":"8D2A96A8-1C5F-46DA-AFAA-20C58F10CEA0","description":""},{"key":"deviceType","value":"ios","description":""},{"key":"deviceName","value":"an","description":""},{"key":"channelId","value":"1","description":""},{"key":"t","value":"1502076276409","description":""}]
// var postLoginKey = postLogin.map((item, index) => {
//   return item.key
// }).sort()
// var loginStr = ''
// postLoginKey.forEach((item) => {
//   postLogin.forEach((obj) => {
//     if(item === obj.key) {
//       loginStr += obj.value
//     }
//   })
// })
// loginStr += appkey10020
// console.log(loginStr)