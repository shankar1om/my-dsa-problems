function maxTip(n, x, y, arr, brr,idx,memo){
    if(idx==arr.length) return 0;
if (memo[idx] !== undefined && memo[idx][x] !== undefined && memo[idx][x][y] !== undefined) {
        return memo[idx][x][y];
    }

    let left=0;
    let right=0;
    if(x>0){
        left= arr[idx]+ maxTip(n, x-1, y, arr, brr,idx+1,memo);
    }
    if(y>0){
       right= brr[idx]+ maxTip(n, x, y-1, arr, brr,idx+1,memo);
    }
    if(memo[idx]==undefined){
        memo[idx]=[];
    }
    if(memo[idx][x]==undefined){
        memo[idx][x]=[];
    }
     return memo[idx][x][y]=Math.max(left ,right);
    
}
function caller(){
    const arr=[1, 2, 3, 4, 5];
    const brr=[5, 4, 3, 2, 1];
    const memo=[];
    return maxTip(5, 3, 3, arr, brr,0,memo)
}
console.log(caller());