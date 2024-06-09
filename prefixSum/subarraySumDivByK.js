var subarraysDivByK = function(nums, k) {
    let result = 0;
    let remain = 0;
    let mp={};
    let sum=0;
    mp[0] = 1;
    for(let i=0;i<nums.length;i++){
            sum += nums[i];
            remain = sum % k;
            if(remain < 0){
                remain=remain + k;
            }
            if(mp[remain]){
                result += mp[remain];
                mp[remain] += 1;
            }
            else{
                mp[remain] = 1;
            }
        }
         return result;
};