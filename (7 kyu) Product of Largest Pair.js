function maxProduct(a) {
   let result =  a.sort((a,b) =>b-a);
   let product = result[0]*result[1]
   return product;
}
console.log(maxProduct([1,2,3,4,5]))