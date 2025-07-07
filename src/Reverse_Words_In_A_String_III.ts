/*
Next time Think about .reverse()
 */

function reverseWords(s: string): string {
    const arr = s.split(' ')
    const res: string[] = []
    for (const word of arr) {
        const temp = []
        for (const c of word) {
            temp.unshift(c)
        }
        res.push(temp.join(''))
    }

    return res.join(' ')
}

const s = "Let's take LeetCode contest"

console.log(reverseWords(s));