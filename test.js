


function a (){
    const x = 5
   return function b (){
console.log(x)
   }
}
const output = a()
console.dir(output)

