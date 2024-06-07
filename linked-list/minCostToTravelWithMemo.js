function minCost(cost,i,n){
    let left=Infinity;
    let right=Infinity;
    if(i === n-1) return 0;
    if(memo[i]) return memo[i];
   if(i+1<n && i+3<n){
         left= Math.abs(cost[i]-cost[i+1]) + minCost(cost,i+1,n);
         right= Math.abs(cost[i]-cost[i+3]) + minCost(cost,i+3,n);
    }
     memo[i]= (Math.min(left,right));
     return memo[i];
}
let n=6;
const memo=new Array(n).fill(undefined);
console.log(minCost([4,12,13,18,10,12],0,n,memo));