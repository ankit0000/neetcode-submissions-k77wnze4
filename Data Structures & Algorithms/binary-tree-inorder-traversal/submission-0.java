/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    ArrayList<Integer> result = new ArrayList<Integer>();
    public List<Integer> inorderTraversal(TreeNode root) {
         helper(root,result);
         return result;
    }

     private void helper(TreeNode node, List<Integer> result) {
        if (node == null) return;                   // ✅ void method, bare return is fine
        helper(node.left, result);                  // ✅ passes result through correctly
        result.add(node.val);                       // ✅ .add() is correct for ArrayList
        helper(node.right, result);                 // ✅ same
    }
}