function maxProfit(prices: number[]): number {
    let day = 0
    for (const i in prices) {
        for (let j = Number(i) + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > day) {
                day = prices[j] - prices[i]
            }
        }
    }
    return day
}

const prices = [7, 6, 4, 3, 1]

console.log(maxProfit(prices))

/*
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
 */