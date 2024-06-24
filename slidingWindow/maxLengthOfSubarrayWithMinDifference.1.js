// question in revision category
function longestSubarray(nums,limit){
    const inc = [];
    const dec = [];
    let size=0;
    let i=0;
    for(let j=0;j<nums.length;j++){
       while(inc.length && nums[j] < nums[inc[inc.length-1]]){
           inc.pop();
       }
       inc.push(j);
       while(dec.length && nums[j] > nums[dec[dec.length-1]]){
           dec.pop();
       }
       dec.push(j);
       while(nums[dec[0]]-nums[inc[0]] >limit){
           if(inc[0]==i) inc.shift();
            if(dec[0]==i) dec.shift();
            i++;
       }
       size=Math.max(size,j-i+1);
    }
    console.log(size)
}
longestSubarray([9,10,1,7,9,3,9,9],7)