//in this approach you just only need to find maximum unsatisfied customer in each and every window ,and we will use our given immunity to those unsatisfied customer,and add all satisfid customer and at the end return addition of all satisfid customer and those maximum satisfied number whome we make satisfied by using immunity . and we get our answer .and dont worry about using immunity on consecutive customers,when you add satsfied customers that time it already get satisfied;
// time complexity ==> O(n)
//space complexity ==> O(n)
function maxSatisfied(customers, grumpy, minutes){
    let unsatisfied=0;
    let j = 0;
    let max = 0;
    for(let i=0;i<customers.length;i++){
         if(grumpy[i]==1){
            unsatisfied += customers[i];
        }
        
        if(i-j==minutes){
            j++;
            if(grumpy[j-1] == 1) {
            unsatisfied -= customers[j-1];
        }
    }
     max = Math.max(max,unsatisfied);
  }
  
    let ans=0;
    for(let i=0;i<customers.length;i++){
        if(grumpy[i] != 1){
            ans += customers[i];
        }
    }
    ans += max;
    console.log(ans);
}
maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3 )