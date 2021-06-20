// // console.log("Hello!!!")
// // document.write("hello!")
// // console.log(document)

// const con = document.getElementById('names')
// // con.textContent = 'Hmm'
// // window.onload = function() {
// //     naames();
// //     function naames() {
// //     document.getElementById('names').innerHTML = "<h1>Hello Guy's</h1>";
// //     };
// // }

// con.addEventListener('click', ()=>{
//     console.log('clicked');
//     con.innerHTML = 'clicked'
// })

// con.addEventListener('mouseover', ()=>{
//     console.log('on');
// })

// con.addEventListener('mouseout', ()=> {
//     console.log('off');
// })

// document.addEventListener('scroll', ()=>{
//     const positionY = window.scrollY
//     console.log(positionY);
// })


// const url = 'https://swapi.dev/api/planets'
// const url = 'https://swapi.dev/api/people'

// // 1. jquery ajax method
// $.ajax({
//     type: 'GET',
//     url: url,
//     success: function(response){
//         console.log('Jquery Ajax', response)
//     },
//     error: function(error){
//         console.log(error)
//     }
// });

const url = "https://openexchangerates.org/api/currencies.json?app_id=ce7ac8d2d40f4d8e89dc406468b7d302"

// // 2. XMLHttpRequest
// const req = new XMLHttpRequest()

// req.addEventListener('readystatechange', ()=>{
//     if(req.readyState===4){
//         console.log('XMLHttp', JSON.parse(req.responseText))
//         // console.log(req.responseText)
//     }
// })

// req.open('GET', url)
// req.send()

// // 3. Fetch method
// fetch(url)

// .then(resp=>resp.json()).then(data=> console.log('fetch', data))
// .catch(err=> console.log(err))

// const url = "https://openexchangerates.org/api/latest.json?app_id=ce7ac8d2d40f4d8e89dc406468b7d302"

// $.ajax({
//     type:'GET',
//     url:'url',
//     success: function(response){
//         console.log(response)
//     }, 
//     error: function(response){
//         console.log(error)
//     }
// })

const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if(req.readyState===4){
        console.log(req.responseText)
    }
})

req.open('GET', url)
req.send()