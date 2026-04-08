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
     * @return {boolean}
     */
    hasCycle(head) {

        let curr = head;
        let traversal = new Map();

        while(curr && curr.next){

            if(traversal.get(curr.val) && traversal.get(curr.val) === curr.next){
                return true;
            }

            traversal.set(curr.val, curr.next);
            curr = curr.next;
        }

        return false;
    }
}
