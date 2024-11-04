function MaxDiff(nums){
    let diff=0;
    let i=nums.length-1;
    let suffix=nums[i];
    for( i=nums.length-1; i>=0; i--){
        diff=Math.max(diff,suffix-nums[i])
        console.log(diff);
        suffix=Math.max(suffix,nums[i])
    }
}
MaxDiff([2,5,1,3,8,6,7,4]);