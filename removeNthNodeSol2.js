//  we have solved this problem using slow and fast 2 pointers approach
// to solve the problem in single pass.
var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let fast = head;
    let i = 0
    while (fast != null && i < n) {
        fast = fast.next;
        i++;
    }
    if (fast == null) {
        let newNode=head.next
        head.next=null;
        return newNode;
    }
    let slow = head;
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
     let tobe=slow.next;
      slow.next=tobe.next;
      tobe.next=null
    return head;
    
};
// Always make sure to delete un-usable node , it will bring strong impact on inter viewer from your side.