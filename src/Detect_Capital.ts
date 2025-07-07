function detectCapitalUse(word: string): boolean {
    if (word === word.toUpperCase() || word === word.toLowerCase()) return true

    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) return false
    }
    return true
}

console.log(detectCapitalUse("FlaG"))
