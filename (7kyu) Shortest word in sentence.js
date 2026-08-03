function findShort(s){
  let word = s.split(' ');
  let small = word[0];
  for(let i=1; i<word.length; i++){
      if(word[i].length < small.length){
        small = word[i];
      }
  }
return small.length;
}
console.log(findShort('Bless Rukundo Dushimimana'));