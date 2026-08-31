var uniqueInOrder=function(iterable){
    let result =[];
    if(iterable === 'string'){
  const arr = iterable.toUpperCase().split('')
  for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
        continue;
    }else{
       result.push(arr[i])     
    }
}
return result;
}else{
  for(let i=0; i<iterable.length; i++){
    if(iterable[i] === iterable[i+1]){
        continue;
    }else{
       result.push(iterable[i])     
    }
  }
return result
}
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))