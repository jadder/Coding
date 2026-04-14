// I’m implementing a simple HashSet using an array.
// This is NOT optimal, but it's a straightforward approach for understanding the behavior.

class MyHashSet {

    // Store unique values
    private values: number[];

    constructor() {
        // Initialize empty storage
        this.values = [];
    }

    // Add a value if it doesn't already exist
    add(value: number): void { 
        // includes() is O(n)
        if (!this.values.includes(value)) {
            // push is O(1)
            this.values.push(value);
        }
    }

    // Remove a value if it exists
    remove(value: number): void {
        // includes() is O(n)
        if (this.values.includes(value)) {
            // indexOf() is O(n)
            const index = this.values.indexOf(value);

            // splice() is O(n) because it shifts elements
            this.values.splice(index, 1);
        }
    }

    // Check if a value exists
    contains(value: number): boolean {
        // includes() is O(n)
        return this.values.includes(value);
    }
}


// ----------------------
// Test Simulation
// ----------------------

// Create instance
let hashSet: MyHashSet = new MyHashSet();

// Operations to simulate
let operations: string[] = [
    "MyHashSet", "add", "add", "contains",
    "contains", "add", "contains", "remove", "contains"
];

// Input values for each operation
let params: number[][] = [
    [], [1], [2], [1], [3], [2], [2], [2], [2]
];

// Store outputs (null for void methods, boolean for contains)
let output: (boolean | null)[] = [];

// Simulate execution step by step
for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    const value = params[i][0];

    switch (operation) {

        case "MyHashSet":
            // Constructor doesn't return anything
            output.push(null);
            break;

        case "add":
            hashSet.add(value);
            output.push(null);
            break;

        case "remove":
            hashSet.remove(value);
            output.push(null);
            break;

        case "contains":
            output.push(hashSet.contains(value));
            break;
    }
}

console.log(output);
// Expected: [null, null, null, true, false, null, true, null, false]