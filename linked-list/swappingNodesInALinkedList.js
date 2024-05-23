var swapNodes = function(head, k) {
    if(!head) return null;
    let fast=head;
    let i=1;
    while(fast.next!=null && i<k){
        fast=fast.next;
        i++;
    }
    let toBeReplaced = fast;
    let slow = head;
    while(fast.next != null){
        slow=slow.next;
        fast=fast.next;
    }
    if(toBeReplaced .val ===slow.val){
        return head;
    }
    else{
        let temp = toBeReplaced .val;
        toBeReplaced.val = slow.val;
        slow.val = temp 
    }
    return head;
}; // using slow and fast pointer approach.