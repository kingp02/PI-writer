function getPi(){
    var sum = 0;
    for(var n = 0; n < 100000000; n++){
        var mult = (n%2 === 0) ? 1 : -1; // -1^n
        sum += mult * (1 / (2*n+1));
    }
    return sum * 4; // to get pi
}
getPi(); // 3.141592643589326
