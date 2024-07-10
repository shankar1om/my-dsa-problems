var averageWaitingTime = function(customers) {
    let timeToPrepareFood = customers[0][0] + customers[0][1];
     let waitingTime = timeToPrepareFood - customers[0][0];
     let avgWaitingTime = waitingTime;
     for(let i=1;i<customers.length;i++){
         let customer = customers[i];
         if(timeToPrepareFood > customer[0]){
             timeToPrepareFood += customer[1];
             waitingTime =  timeToPrepareFood - customer[0];
         }
         else{
             timeToPrepareFood =customer[0] + customer[1];
             waitingTime = customer[1];
         }
         avgWaitingTime += waitingTime; 
     }
      return avgWaitingTime / customers.length;
 };