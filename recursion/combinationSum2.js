function combinationSum2(nums,ind,ds,arr,target,sum,i){
    if(sum == target){
        ds.push([...arr]);
        return;
    }
    else if(sum > target) return;
    if(nums[i] != nums[i-1] || i != ind){
        for( i=ind;i<nums.length;i++){
            sum += nums[i];
            arr.push(nums[i]);
            combinationSum2(nums,ind+1,ds,arr,target,sum,i);
            sum -= nums[i];
            arr.pop();
        }
    }
    return ds;
}
const nums=[1,1,2,3,4];
let sum=0;
const ds=[];
const arr =[];
let target = 8;
let i;
console.log(combinationSum2(nums,0,ds,arr,target,sum,i));