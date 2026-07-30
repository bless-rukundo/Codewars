function stray(numbers) {
  let count=numbers.reduce((acc, current)=>{
    acc[current]=(acc[current] || 0)+1;
    return acc;
  }, {});
  for([key,value] of Object.entries(count)){
    if(value === 1){
    }
  }
  return Number(key);
}
console.log(stray([1, 1, 2]))