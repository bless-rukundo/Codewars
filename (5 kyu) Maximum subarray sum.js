var maxSequence = function(arr){
    let sum = 0;
const allPossive = arr.every(items=>{
    items=items>0
})   
if(allPossive){
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
const notAllPositive = arr.some((numbers)=>numbers<0)    
if(!notAllPositive){
   return 0; 
}else{
    const filtered = arr.filter((items)=>{
        return items=items>0
    })
    const set = [...new Set(filtered)]
    const final = set.sort((a,b)=>b-a)
    for(let i=0; i<final.length; i++){
        sum = final[0]+final[1];
    }
    return sum;
}
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))