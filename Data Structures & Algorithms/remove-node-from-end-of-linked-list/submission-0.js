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
        
        let left = dummy;
        let right = head;

        // move right n steps ahead to create the gap
        while (n > 0) {
            right = right.next;
            n--;
        }

        // move both until right falls off the end
        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        // left is just before the target node — skip it
        left.next = left.next.next;

        return dummy.next;
    }
}
