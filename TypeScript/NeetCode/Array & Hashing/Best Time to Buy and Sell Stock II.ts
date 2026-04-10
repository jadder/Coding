function maxProfit(prices: number[]): number {
    // Time Complexity: O(n)
    // Space Complexity: O(1)

    // If there's only one price, no transaction can be made
    if (prices.length === 1) return 0;

    // If there are only two prices, return profit if possible
    if (prices.length === 2) return prices[0] < prices[1] ? prices[1] - prices[0] : 0;

    let totalProfit: number = 0;    // Accumulates total profit
    let buyPrice: number = 0;       // Stores the price at which we buy
    let isHolding: boolean = false; // Indicates whether we currently hold a stock

    // Iterate through the array
    // NOTE: Even though there is a nested while loop,
    // each element is processed at most once overall.
    // Therefore, total time complexity remains O(n)
    for (let i: number = -1; i < prices.length; i++) {

        // BUY condition: start of an upward trend
        if (i + 1 < prices.length && prices[i] < prices[i + 1] && isHolding == false) {
            buyPrice = prices[i];
            isHolding = true;
            continue;
        }

        // SELL logic: find peak of the upward trend
        if (isHolding) {
            // Move forward while prices keep increasing
            while (i + 1 < prices.length && prices[i] < prices[i + 1]) {
                i++;
            }

            // Sell at peak and accumulate profit
            totalProfit += prices[i] - buyPrice;

            // Reset state
            isHolding = false;
            buyPrice = 0;
        }
    }

    return totalProfit;
}


let result: number = 0;

let prices: number[] = [7, 1, 5, 3, 6, 4];  //expected 7
result = maxProfit(prices);
if (result !== 7) { console.log("Failed: " + result); }

prices = [1, 2, 3, 4, 5];   // expected 4
result = maxProfit(prices);
if (result !== 4) { console.log("Failed: " + result); }

prices = [2, 1, 2, 0, 1];   // expected 2
result = maxProfit(prices);
if (result !== 2) { console.log("Failed: " + result); }

prices = [1, 2];   // expected 1
result = maxProfit(prices);
if (result !== 1) { console.log("Failed: " + result); }

console.log("Se acabo!");

