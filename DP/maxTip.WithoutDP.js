maxTip(n, x, y, arr, brr) {
    function maxtip(tipsA, tipsB, X, Y, N) {
 // Combine the tips into an array of objects to sort them based on the difference
 let combined = [];
 for (let i = 0; i < N; i++) {
     combined.push({ a: tipsA[i], b: tipsB[i], diff: Math.abs(tipsA[i] - tipsB[i]) });
 }

 // Sort the combined array by the absolute difference in descending order
 combined.sort((x, y) => y.diff - x.diff);

 let totalTip = 0;
 let countA = 0;
 let countB = 0;

 for (let i = 0; i < N; i++) {
     if (combined[i].a > combined[i].b) {
         if (countA < X) {
             totalTip += combined[i].a;
             countA++;
         } else {
             totalTip += combined[i].b;
             countB++;
         }
     } else {
         if (countB < Y) {
             totalTip += combined[i].b;
             countB++;
         } else {
             totalTip += combined[i].a;
             countA++;
         }
     }
 }

 return totalTip;
}
function caller(){
 return maxtip(arr,brr,x,y,n)
}
return caller();
 }