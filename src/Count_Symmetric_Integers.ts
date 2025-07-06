/*
For study, think about
            a += s.charCodeAt(j) - 48;
            b += s.charCodeAt(j + n) - 48;
 */

function countSymmetricIntegers(low: number, high: number): number {
    let total = 0;
    for (let i = low; i <= high; i++) {
        if (i.toString().length % 2 !== 0) {
        } else {
            let sum1 = 0
            let sum2 = 0;
            const first = i.toString().slice(0, i.toString().length / 2);
            const last = i.toString().slice(i.toString().length / 2, i.toString().length);
            for (let j = 0; j < i.toString().length / 2; j++) {
                sum1 = sum1 + Number(first[j])
                sum2 = sum2 + Number(last[j])
            }

            if (sum1 === sum2) {
                total += 1
            }
        }
    }
    return total
}

console.log(countSymmetricIntegers(1, 100))

