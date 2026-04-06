function sumRegion(row1: number, col1: number, row2: number, col2: number): number {

    let sum: number = 0;
    for (let i = row1; i <= col1; i++) {
        for (let j = row2; j <= col2; j++) {
            sum += obj[i][j];
        }
    }

    return sum;
}


// Input: ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
// [[[
// [3, 0, 1, 4, 2], 
// [5, 6, 3, 2, 1], 
// [1, 2, 0, 1, 5], 
// [4, 1, 0, 1, 7], 
// [1, 0, 3, 0, 5]]],

// [2, 1, 4, 3], 
// [1, 1, 2, 2], 
// [1, 2, 2, 4]]

// Output: [null, 8, 11, 12]

const NumMatrix: number[][] = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
];

const sumRegion1: number[] = [2, 1, 4, 3];
const sumRegion2: number[] = [1, 1, 2, 2];
const sumRegion3: number[] = [1, 2, 2, 4];

sumRegion(NumMatrix, sumRegion1, sumRegion2, sumRegion3);