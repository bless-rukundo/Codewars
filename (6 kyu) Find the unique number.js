function findUniq(arr) {
    let count = arr.reduce((acc, current)=>{
        acc[current] = (acc[current] || 0)+1;
        return acc;
    }, {})
    for(let [key, value] of Object.entries(count)){
        if(value ===1){
            unique = key;
        }
    }
    return Number(unique);
}

console.log(findUniq([1,2,3,3,3,1,1,0,2]))
