function maxProfit(prices: number[]): number {
    let totalProfit: number = 0;

    for(let i=1; i< prices.length; i++){
        if(prices[i] > prices[i-1]){
            totalProfit += (prices[i] - prices[i-1]);
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

