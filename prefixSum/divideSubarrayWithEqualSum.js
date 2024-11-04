function subarrayWithEqualSum(nums){
    let sum=0;
    let part1;
    let part2;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    let currSum=0;
    let halfSum=Math.floor(sum/2);
   
    for(let i=0;i<nums.length;i++){
        currSum += nums[i];
        if(halfSum==currSum){
            console.log(halfSum)
            part1=nums.slice(0,i+1);
            part2=nums.slice(i+1,nums.length);
            console.log(part1,part2);
            break;
        }
    }
}
subarrayWithEqualSum([3,4,-2,5,8,20,-10,8]);