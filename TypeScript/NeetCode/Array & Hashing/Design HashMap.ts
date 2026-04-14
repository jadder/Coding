// I’m implementing a simple HashMap using a plain object.
// This gives average O(1) time for all operations due to hashing.

class MyHashMap {

    // Internal storage: key-value pairs
    // Record<number, number> is just a JS object under the hood
    miMapa: Record<number, number>;

    constructor() {
        // Initialize empty map
        this.miMapa = {};
    }

    // Insert or update a key-value pair
    put(key: number, value: number): void {
        // Direct assignment → O(1) average
        this.miMapa[key] = value;
    }

    // Retrieve value by key
    get(key: number): number {
        // Using "in" to check existence (avoids falsy bugs like 0)
        // Lookup in object → O(1) average
        return key in this.miMapa ? this.miMapa[key] : -1;
    }

    // Remove a key-value pair
    remove(key: number): void {
        // delete operator → O(1) average
        delete this.miMapa[key];
    }
}

// ----------------------
// Test Simulation
// ----------------------

// Create instance
let myHashMap: MyHashMap = new MyHashMap();

// Operations to simulate
let operations: string[] = ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"];

// Input values for each operation
let parameters: number[][] = [
    [], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]
];

// Overwriting test case (second scenario)
operations = ["MyHashMap", "put", "put", "put", "get", "put", "get", "get"];
parameters = [[], [0, 0], [1, 1], [2, 2], [1], [1, 100], [1], [0]];

// Store outputs:
// - null for void methods
// - number for get
let output: (number | null)[] = [];

// Simulate execution step by step
for (let i = 0; i < operations.length; i++) {

    const operation = operations[i];

    // Default placeholders
    let key: number = 0;
    let value: number = parameters[i][0];

    switch (operation) {

        case "MyHashMap":
            // Constructor → no return
            output.push(null);
            break;

        case "put":
            // Extract key and value
            key = parameters[i][0];
            value = parameters[i][1];

            // Insert/update → O(1)
            myHashMap.put(key, value);

            output.push(null);
            break;

        case "remove":
            // Remove by key → O(1)
            myHashMap.remove(value);

            output.push(null);
            break;

        case "get":
            // Lookup → O(1)
            output.push(myHashMap.get(value));
            break;
    }
}

console.log(output);

// Expected:
// [null, null, null, 1, -1, null, 1, null, -1]
// [null, null, null, null, 1, null, 100, 0]

// This makes the file a module (avoids global scope issues in TS)
export { };