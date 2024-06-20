function findMinDays(bloomday,m,k,a){
    let count=0;
    for(let i=0;i<bloomday.length;i++){
        if(bloomday[i]>a) count=0;
        else {
            count++;
            if(count==k){
                m--;
                count=0;
            }
        }
         if(m==0) return true;
    }
    return false;
}
function minDays(bloomday,m,k){
    let ans=-1;
    let hi= Math.max(...bloomday);
    let lo=Math.min(...bloomday);
    console.log(hi,lo)
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        if(findMinDays(bloomday,m,k,mid)){
            ans=mid;
            hi=mid-1;
        }
        else{
            lo=mid+1;
        }
    }
    return ans;
}


console.log( minDays([7,7,7,7,12,7,7],2,3));//famous pattern question of binary search.