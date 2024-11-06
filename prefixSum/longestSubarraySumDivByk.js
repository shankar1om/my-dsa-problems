
function longestSubarraySumDivByk(nums, k, ds) {
    let length = 0;
    let sum = 0;
    const mp = {};
    let finalAns = [];
    mp[0] = -1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum % k;
        if (rem < 0) rem += k;
        if (mp[rem] !== undefined) {
            if (i - mp[rem] > length) {
                length = i - mp[rem];
                finalAns = (nums.slice(mp[rem] + 1, i + 1));
            }
        }
        else {
            mp[rem] = i;
        }
    }
    console.log(finalAns)
    return length;
}
/*
*** is code ya problem me sikhne wali ye cheez h ki modulo lete time agar remainder negative h
to use positive krlo devisor add krke nhi to problem ho skta h.
*/
console.log(longestSubarraySumDivByk([2, -7, 2, -8, 0, 5, -4, 6, -3, -2, -1], 8));

