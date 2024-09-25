function multiply(a,b){
    if(typeof a==='number' && typeof b==='number'){
        return a*b;
    }
    return 'please provide two numbers'
}
console.log(multiply(4,4))