var mergeNodes = function(head) {
    let p2 = head.next;
    let p1 = head.next;
    let sum = 0;
    while(p2 != null){
        sum += p2.val;
        p2=p2.next;
         if (p2 != null && p2.val == 0){
            p1.val=sum;
            p1.next=p2.next;
            sum=0;
            p1=p1.next;
        }
    }
    return head.next;
};