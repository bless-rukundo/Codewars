// function findEvenIndex(arr) {
//   //Code goes here!
//     return -1;
// }

function test(arr){
    let count=0;
    let len=arr.length-1
for(let i=0; i<arr.length; i++){
    let sum1=arr[i]+arr[i++];
    let sum2=arr[len]+arr[len--];
    if(sum1=== sum2){
        len--
        count++
    }
}
return count;
}
console.log(test([20,4,10,-80,10,10,15,35]))
