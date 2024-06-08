function contigiousSum(nums,k){
    let sum =0;
    const mp={};
    mp[0]=-1;
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        let remain = sum % k;
        if(mp[remain]){
            if(i-mp[remain] >= 2){
                return true;
            }
        }
        else{
            mp[remain] = i;
        }
    }
    return false;
}
let ans=contigiousSum([1,2,3],5)
console.log(ans);

// note -->  The issue in your code lies in the check if(mp[remain]). In JavaScript, the value 0 is falsy, and since remain can be 0, this condition will fail when remain is 0. As a result, the code does not correctly handle the case when the remainder is 0, which leads to incorrect results.