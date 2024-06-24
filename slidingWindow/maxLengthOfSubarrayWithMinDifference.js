let i=0;
let size = 0;
for(let j=0;j<nums.length;j++){
    let a=Math.max(...(nums.slice(i,j+1)));
    let b=Math.min(...(nums.slice(i,j+1)));
    if(a-b > limit){
        while(a-b > limit){
            i++;
             a=Math.max(...(nums.slice(i,j+1)));
             b=Math.min(...(nums.slice(i,j+1)));
        }
     }
     size=Math.max(size,j-i+1);
}
return size;