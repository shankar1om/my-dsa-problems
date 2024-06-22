var numberOfSubarrays = function (nums, k) {
    const mp = {};
    let sum = 0;
    let ans = 0;
    mp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] % 2;
        if (mp[sum]) mp[sum]++;
        else mp[sum] = 1;
        if (mp[sum - k]) ans += mp[sum - k];
    }
    return ans;
};