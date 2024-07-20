var numWaterBottles = function(numBottles, numExchange) {
    let remBottles = numBottles
    while(remBottles>=numExchange){
        let temp = numBottles;
        remBottles = Math.floor(remBottles/numExchange);
        numBottles = numBottles + remBottles;
        remBottles += temp % numExchange;
    }
    return numBottles;
};
//done by simulation