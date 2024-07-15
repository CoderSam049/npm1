import axios from 'axios'

// let imgs = document.querySelector('img')
// let aa= document.createElement('button');
// aa.innerText='click me'
// document.body.append(aa)



// aa.addEventListener('click',()=>{
//     axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(function (response) {
//       imgs.src= response.data.message
//     })
  
// })


    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
    console.log(response)
    })


let a=5
a+=5
console.log(a)
