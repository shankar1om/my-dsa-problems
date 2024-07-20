var passThePillow = function(n, time) {
    let temp = 1;
    let direction = 1;

    for (let i = 0; i < time; i++) {
        temp += direction;

        if (temp === n) {
            direction = -1;
        } else if (temp === 1) {
            direction = 1;
        }
    }
    return temp;
};