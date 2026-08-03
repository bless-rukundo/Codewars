const lettersToNumbers = s => {
  let arr = s.replace(/[' "]/gi,'').split('');
  let array = arr.map(char =>char.toLowerCase().charCodeAt(0) - 96).reduce((acc,num) => acc + num,0);
}
console.log(lettersToNumbers('I Love You'));
