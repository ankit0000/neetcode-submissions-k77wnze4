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
     * @return {void}
     */
    reorderList(head) {
        // Step 1: Find the middle
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let prev = null, curr = slow.next;
  slow.next = null; // cut the list
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Merge both halves
  let l1 = head, l2 = prev;
  while (l2) {
    let next1 = l1.next, next2 = l2.next;
    l1.next = l2;
    l2.next = next1;
    l1 = next1;
    l2 = next2;
  }
    }
}
