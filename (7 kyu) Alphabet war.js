function alphabetWar(fight)
{
    let right=0;
    let left = 0;

    let w = 4, p = 3, b = 2, s = 1;
    let m = 4, q = 3, d = 2, z = 1;
     let j = 0;
     let over = fight.length/2;
     let resultL=[], resultR=[];
     for(let i=0; i<fight.length; i++){
        if(fight.indexOf(fight[i]) <over){
            resultL.push(fight[i]);
        }else{
            resultR.push(fight[i])
        }
     }
     //return resultL;
     let sumL = 0, sumR =0;
     for(let i=0; i<resultL.length; i++){
      if(resultL[i] === 'w' || resultL[i]=== 'p' || resultL === 'b' || resultL === 's') {
        sumL += resultL[i];
      } 
     }

    for(let i=0; i<resultR.length; i++){
      if(resultL[i] === 'm' || resultL[i]=== 'q' || resultL === 'd' || resultL === 'z') {
        sumR += resultR[i];
      } 
     }
   if(sumL<sumR){
    return "Right side wins!";
   }else if(sumL>sumR){
    return "Left side wins!"
   }else{
    return "Let's fight again!";
   }
}
console.log(alphabetWar(['m', 'q', 'd', 'w']))