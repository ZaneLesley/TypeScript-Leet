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
    if (root == null)
        return null;
    if (root.left == null && root.right == null)
        return root.val < limit ? null : root;
    root.left = sufficientSubset(root.left, limit - root.val);
    root.right = sufficientSubset(root.right, limit - root.val);
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