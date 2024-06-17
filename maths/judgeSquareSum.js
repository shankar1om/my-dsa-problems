var judgeSquareSum = function (c) {
    let num = Math.floor(Math.sqrt(c));
    console.log(num);
    for (let i = 0; i <= num; i++) {
        let ans = c - i * i;
        // if (ans == 0) return true;
        if (Number.isInteger(Math.sqrt(ans)) && Math.sqrt(ans) <= num  ) return true;
    }
    return false;
};