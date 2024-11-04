function threeSum(nums ,target){
    const map = {}; 
    let mp = {};
     const cp = [];
    for(let i=0;i<nums.length;i++ ){
        //after each iteration of i again empty the object.
         mp={};
        for(let j=i+1;j<nums.length;j++ ){
            let twoSum = nums[i]+nums[j];
            let thirdNum = target-twoSum
            if(mp[thirdNum] ){//if third number present in mp;
                // we are sorting so that if there are duplicate elements in other places so that
                // they can come in certain order  and we easily can recognize that whether it is duplicate or
                //not.
                 let temp =  [nums[i],nums[j],thirdNum].sort((a,b) => a-b);
                if(!map[temp]){
                    // after sorting check if already present or not if not than push this in cp.
                    cp.push( [nums[i],nums[j],thirdNum]);
                }
                map[temp] = true;
            }
             
             mp[nums[j]] = true; 
            //  m yha  mp[nums[j]] = true; bad m use kr rha hu iska ek bda karan h kyuki m janata hu ki i aur j
            // per to m hu hi mujhe unke beech ki value chahiye to m unke beech ki value hi map me dalunga 
            //is tarah agar mne ek eliment asa h agar mne use 1st aur 2nd liya h to m use 3rd nhi lunga.
            
            /*
            ye confusion ho skta h ki agar mera phla element i h dusra element j h aur tisra 
            element in dono k beech na pada to , koi tension nhi jab kabhi man lo tisra element 
            i aur j ke beech nhi hoga , to i aur j ke sare element to map me jaayenge hi to triplet 
            me 3 element hote h suppose i ,j,k agar i ,j ko fix krde to third k hi hoga , agar k yha
            i aur j k beech nhi h mtlab ki wo map me nhi hoga , lekin jab mera j is tisre wale element per 
            jayega to jo dusra wala tha wo already map me ja chuka hoga to , is time i aur k fix ho gye 
            aur j map me mil gya to har bar hme i, j, k ka specefic combination hi milega.
            */
      }
    }
   return cp;
}
console.log(threeSum([-1,0,1,2,-1,-4],0));
// this approach gives time comlexity more TLE occours.