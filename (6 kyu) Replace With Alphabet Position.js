function alphabetPosition(text) {
   let arr = text.toLowerCase().trim().split("")
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].charCodeAt()>96 && arr[i].charCodeAt()<122){
        result.push(arr[i].charCodeAt()-96);
    }
    }
    return result.join(" ");
}
console.log(alphabetPosition("aThe sunset sets at twelve o' clock."))