function isValidSudoku(board: string[][]): boolean {

    // Time Complexity: O(1)
    // Space Complexity: O(1)
    // Explanation:
    // The board size is fixed (9x9), so all loops run a constant number of times.
    // Even though it looks like O(n^2), n is always 9 → constant time.

    // NOTE:
    // This is a clear and straightforward implementation (first version).
    // It validates rows, columns, and boxes in separate passes.
    // There is a more optimized approach that validates everything in a single pass.

    // -------------------------
    // VALIDATE ROWS
    // -------------------------
    // Iterate through each row of the board
    for (const row of board) {

        // Set to track numbers already seen in the row
        let colecion: Set<string> = new Set();

        // Iterate through each cell in the row
        for (const c of row) {

            // Ignore empty cells
            if (c !== '.') {

                // If number is not in the set, add it
                if (!colecion.has(c)) {
                    colecion.add(c);
                }
                // If already exists → duplicate → invalid
                else {
                    return false;
                }
            }
        }
    }

    // -------------------------
    // VALIDATE COLUMNS
    // -------------------------
    // Iterate through each column (0 to 8)
    for (let col = 0; col < 9; col++) {

        // Set to track numbers seen in the column
        let colecion: Set<string> = new Set();

        // Iterate through each row for this column
        for (let fila = 0; fila < 9; fila++) {

            // Get value at position [row][col]
            let valor = board[fila][col];

            // Ignore empty cells
            if (valor !== '.') {

                // If not seen before, add it
                if (!colecion.has(valor)) {
                    colecion.add(valor);
                } 
                // If duplicate → invalid
                else {
                    return false;
                }
            }
        }
    }

    // -------------------------
    // VALIDATE 3x3 BOXES
    // -------------------------
    // boxRow and boxCol represent the top-left corner of each 3x3 box
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {

            // Set to track numbers inside the current 3x3 box
            let set = new Set<string>();

            // Iterate through the 3x3 box (9 cells)
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {

                    let val = board[boxRow + i][boxCol + j];

                    if (val !== '.') {

                        // If already exists → duplicate → invalid
                        if (set.has(val)) return false;

                        set.add(val);
                    }
                }
            }
        }
    }

    // If all checks pass → board is valid
    return true;
}

let board: string[][] =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]; //expected true

if (isValidSudoku(board) === true) {
    console.log("Passed");
} else {
    console.log("Failed");
}


board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]; // expected false

 if (isValidSudoku(board) === false) {
    console.log("Passed");
} else {
    console.log("Failed");
}