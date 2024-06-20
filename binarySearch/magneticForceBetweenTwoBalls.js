var maxDistance = function(position, m) {
    position=position.sort((a,b)=>a-b);
   let hi=position[position.length-1]-position[0];
   let lo=1;
   console.log(position,hi)
   let ans=0;
   while(lo<=hi){
       let mid=Math.floor((lo+hi)/2);
       if(findMaxDistance(position,m,mid)){
           lo=mid+1;
           ans=mid;
       }
       else{
           hi=mid-1;
       }
   }
   return ans;
}
function findMaxDistance(position,m,n){
   let basket=position[0];
   m--;
   for(let i=1;i<position.length;i++){
       if(position[i]-basket>=n){
           basket=position[i];
           m--;
       }
       if(m==0) return true;
   }
  return false;
};