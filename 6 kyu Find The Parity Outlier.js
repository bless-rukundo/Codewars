function findOutlier(integers){
    let even=0;
    let odd=0;
    let result = 0;
  for(let i=0; i<integers.length; i++){
    if (integers[i]%2 === 0){
        even ++
    }else{
        odd++
    }
  }
  
  if(even > odd){
     result = integers.filter((item)=>{
        return item%2 !==0;
    })
  } else {
    result = integers.filter((item)=>{
        return item%2 ===0;
    })
  }
  return result;
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))