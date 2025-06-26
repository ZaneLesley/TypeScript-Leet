class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    // We ran out of nodes
    if (root == null)
        return null;

    // If we are at a leaf node
    if (root.left == null && root.right == null)
        // We ran out of our budget from limit, so we return the node as null, deleting it
        return root.val < limit ? null : root;
    // Traverse the tree, and save whatever node we get back, either the node we sent, or a null node, deleting it
    root.left = sufficientSubset(root.left, limit - root.val);
    root.right = sufficientSubset(root.right, limit - root.val);
    // Both children are pruned, so we need to prune it as well
    return root.left == root.right ? null : root;
}

function buildTree(values: number[]): TreeNode | null {
    if (values.length === 0) return null;
    const nodes = values.map(v => v === 0 ? null : new TreeNode(v));
    let root = nodes[0];
    let queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (queue.length > 0 && i < values.length) {
        let current = queue.shift();
        if (current) {
            current.left = nodes[i++] ?? null;
            queue.push(current.left);
            if (i < values.length) {
                current.right = nodes[i++] ?? null;
                queue.push(current.right);
            }
        }
    }

    return root;
}

const root = buildTree([1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14]);
console.log(sufficientSubset(root, 1))