function minCost(cost,i,n){
    let left=Infinity;
    let right=Infinity;
    if(i === n-1) return 0;
   if(i+1<n && i+3<n){
         left= Math.abs(cost[i]-cost[i+1]) + minCost(cost,i+1,n);
         right= Math.abs(cost[i]-cost[i+3]) + minCost(cost,i+3,n);
    }
     return (Math.min(left,right));
}

console.log(minCost([4,12,13,18,10,12],0,6));