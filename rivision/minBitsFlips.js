// revision --> hard
function minBitsFlips(nums,k){
    let flips=0;
    let noOfBitsFlipsFori=0;
    const mp={};
    for(let i=0;i<nums.length;i++){
        if(i>=k && mp[i-k]){
            noOfBitsFlipsFori--;
        }
        if(noOfBitsFlipsFori % 2==nums[i]){
            if(i+k>nums.length) return -1;
            noOfBitsFlipsFori++;
            mp[i]=true;
            flips ++;
        }
    }
    console.log(flips);
}
 minBitsFlips([0,0,0,1,0,1,1,0],3)
