// hint => in this approach we just count number of zeros if hits the target;
function numberOfSubarrays(nums,k){
    let numsOfZeros=0;
    let sum=0;
    let ans=0;
    let i=0;
   for(let j=0;j<nums.length;j++){
     sum =sum + nums[j] % 2;
     if(sum > k){
         sum =sum - nums[i] % 2;
         i++;
         numsOfZeros=0;
     }
     if(sum==k){
         ans = ans+1;
         while(nums[i] != 1){
             i++;
             numsOfZeros++;
         }
         ans =ans + numsOfZeros;
     }
   }
   console.log(ans);
}
numberOfSubarrays
// Time Complexity = O(N);
// Space Complexity = O(1);