/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
          // base case — empty node adds 0 depth
  if (root === null) return 0;

  // get depth of left and right subtrees
  let leftDepth  = this.maxDepth(root.left);
  let rightDepth = this.maxDepth(root.right);

  // current node adds 1, take the deeper side
  return 1 + Math.max(leftDepth, rightDepth);
    }
}
