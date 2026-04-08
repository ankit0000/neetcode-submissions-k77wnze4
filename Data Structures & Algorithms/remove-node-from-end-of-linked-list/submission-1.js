/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
         const dummy = new ListNode(0, head);

    // Pass 1 — count the length
    let length = 0;
    let curr = head;
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    // Pass 2 — walk (length - n) steps from dummy
    // lands exactly one node BEFORE the target
    let steps = length - n;   // ✅ not length - n - 1
    curr = dummy;
    while (steps > 0) {
        curr = curr.next;
        steps--;
    }

    // curr.next is the target — skip it
    curr.next = curr.next.next;

    return dummy.next;
    }
}
