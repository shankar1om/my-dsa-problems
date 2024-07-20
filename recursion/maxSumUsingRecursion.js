function maxSum(nums,sum,ind,maxsum){
    maxsum = Math.max(sum,maxsum);
   for(let i=ind;i<nums.length;i++){
        sum+=nums[i];
        maxsum=maxSum(nums,sum,i+1,maxsum);
       if(nums[i]>=0){
            sum-=nums[i];
       }
       else{
           sum +=nums[i];
       }
   }
   return maxsum;
}
console.log(maxSum([2, -1, 3, -1, -5, 2],0,0,0));