function grow(x){
  return x.reduce((acc, current)=>{
    return acc*current;
  })
}
console.log(grow([1,2,3,4]));