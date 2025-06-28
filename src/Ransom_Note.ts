function canConstruct(ransomNote: string, magazine: string): boolean {
    // @ts-ignore
    const map = new Map<string, number>();
    for (let c of magazine) {
        map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    }

    for (let c of ransomNote) {
        if (map.has(c)) {
            if (map.get(c) - 1 < 0) return false;
            map.set(c, map.get(c) - 1);
        } else {
            return false;
        }
    }

    return true;
};

const ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine))