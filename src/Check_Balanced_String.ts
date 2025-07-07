function isBalanced(num: string): boolean {
    const sum = [0, 0]

    for (let i = 0; i < num.length; i++) {
        if (Number(i) % 2 === 0) {
            sum[0] += Number(num[i])
        } else {
            sum[1] += Number(num[i])
        }
    }

    return sum[0] === sum[1];

}

console.log(isBalanced("24123"))