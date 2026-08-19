function basicOperators(operator, num1, num2){
    if(operator === "+"){
        return num1+num2;
    }
    else if(operator === "*"){
        return num1*num2
    }
    else if(operator === "/"){
        return num1/num2;
    }
    else if(operator === "-"){
        return num1-num2;
    }else{
        return 'invalid operator'
    }
}
console.log(basicOperators("*", 4, 2))