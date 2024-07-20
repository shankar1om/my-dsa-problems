function maxSum(nums,sum,ind,maxsum,cp,ds){
    maxsum = Math.max(sum,maxsum);
    ds.push([...cp]);
   for(let i=ind;i<nums.length;i++){
        sum+=nums[i];
        cp.push(nums[i]);
        maxsum=maxSum(nums,sum,i+1,maxsum,cp,ds);
       if(nums[i]>=0){
            sum-=nums[i];
       }
       else{
           sum +=nums[i];
       }
       cp.pop();
   }
   return maxsum;
}
const cp=[];
const ds=[];
const nums=[2, -1, 3, -1, -5, 2];
maxsum=maxSum(nums,0,0,0,cp,ds);
console.log(maxsum);

let currSum=0;
for(let i=0;i<ds.length;i++){
   if(currSum==maxsum){
       console.log(ds[i-1]);
       break;
   }
   let temp=ds[i];
   currSum=0;
   for(let j=0;j<temp.length;j++){
       currSum += temp[j];
   }
}