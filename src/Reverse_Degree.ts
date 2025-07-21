function reverseDegree(s: string): number {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        sum += (Math.abs(s[i].charCodeAt(0) - 123)) * (i + 1)
    }

    return sum;
};

const s: string = 'zaza'
console.log(reverseDegree(s))