function getMiddle(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right - 1) {
    left++;
    right--;
  }
  return s.slice(left, right + 1);
}
console.log(getMiddle('bless')); 
console.log(getMiddle('test'));  