class NeighborSum {
    private grid: number[][];
    private n: number;

    constructor(grid: number[][]) {
        this.grid = grid;
        this.n = grid.length;
    }

    adjacentSum(value: number): number {
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === value) {
                    const left = j > 0 ? this.grid[i][j - 1] : 0;
                    const right = j < this.grid[i].length - 1 ? this.grid[i][j + 1] : 0;
                    const up = i > 0 ? this.grid[i - 1][j] : 0;
                    const down = i < this.n - 1 ? this.grid[i + 1][j] : 0;
                    return left + right + up + down;
                }
            }
        }
        return -1;
    }

    diagonalSum(value: number): number {
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === value) {
                    let sum = 0;
                    if (i - 1 >= 0 && j - 1 >= 0) sum += this.grid[i - 1][j - 1];
                    if (i + 1 < this.n && j + 1 < this.grid[i].length) sum += this.grid[i + 1][j + 1];
                    if (i + 1 < this.n && j - 1 >= 0) sum += this.grid[i + 1][j - 1];
                    if (i - 1 >= 0 && j + 1 < this.grid[i].length) sum += this.grid[i - 1][j + 1];
                    return sum;
                }
            }
        }
        return -1;
    }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

const grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
const obj = new NeighborSum(grid)
const param_1 = obj.adjacentSum(1)
console.log(param_1)
const param_2 = obj.adjacentSum(4)
console.log(param_2)
const param_3 = obj.diagonalSum(4)
console.log(param_3)
const param_4 = obj.diagonalSum(8)
console.log(param_4)