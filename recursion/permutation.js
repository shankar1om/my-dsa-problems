function permute(nums,mp,ds,ans){
    if(ds.length==nums.length){
        ans.push([...ds]);
        return;
    }
    for(let i=0;i<nums.length;i++){
        if(!mp[nums[i]]){
         mp[nums[i]] = true;
         ds.push(nums[i]);
         permute(nums,mp,ds,ans)
         mp[nums[i]] = false;
         ds.pop();
     }
    }
    return ans;
}
const mp={};
const ds=[];
const ans=[];
console.log(permute([1,2,3],mp,ds,ans));
