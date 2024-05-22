var removeNthFromEnd = function(head, n) {
    if (!head) return null; // Early exit for empty list

    let count = 0;
    let i = head;

    // Count the total number of nodes
    while (i !== null) {
        count++;
        i = i.next;
    }

    // If we're removing the head (first node from start)
    if (count === n) return head.next;

    let toBe = head;
    let prev = null;

    // Move to the (count - n)th node
    for (let j = 0; j < count - n; j++) {
        prev = toBe;
        toBe = toBe.next;
    }

    // Remove the nth node from the end
    prev.next = toBe.next;

    return head;
};
