class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    const dfs = (node, isLeft) => {
        if (!node) return 0;
        if (!node.left && !node.right) return isLeft ? node.val : 0;
        return dfs(node.left, true) + dfs(node.right, false);
    };
    return dfs(root, false);
};

const root = buildTree([3, 9, 20, null, null, 15, 7]);

sumOfLeftLeaves(root);

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