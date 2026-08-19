function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let result = [];  

  for (let i = 0; i <= strarr.length - k; i++) {
    let combined = "";
    for (let j = 0; j < k; j++) {
      combined += strarr[i + j];
    }
    result.push(combined);
  }
  let max = result[0];
  for (let i = 1; i < result.length; i++) {
    if (result[i].length > max.length) {
      max = result[i];
    }
  }

  return max;
}
console.log(longestConsec(['bless', 'rukundo', 'dushimimana'], 2))