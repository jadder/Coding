{
    class Solution {
        /**
         * @param {number[]} height
         * @return {number}
         */
        trap(height: number[]): number {
            let left: number = 0, right: number = height.length - 1;
            let leftMax: number = 0, rightMax: number = 0;
            let water: number = 0;

            while (left < right) {
                if (height[left] < height[right]) {
                    if (height[left] >= leftMax) {
                        leftMax = height[left];
                    } else {
                        water += leftMax - height[left];
                    }
                    left++;
                } else {
                    if (height[right] >= rightMax) {
                        rightMax = height[right];
                    } else {
                        water += rightMax - height[right];
                    }
                    right--;
                }
            }

            return water;
        }
    }

    const solution = new Solution();
    runTests(solution.trap.bind(solution));

    function runTests(fn: (height: number[]) => number) {
        const tests: { input: number[], expected: number, description: string }[] = [

            {
                input: [3,0,4,7,5,6],
                expected: 4,
                description: "Pico dominante al inicio"
            },
            
            {
                input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
                expected: 6,
                description: "Pico dominante al inicio"
            },
            {
                input: [0, 7, 1, 4, 6],
                expected: 7,
                description: "Pico dominante al inicio"
            },
            {
                input: [0, 1, 0, 1, 0, 1, 0],
                expected: 2,
                description: "Múltiples pequeños valles"
            },
            {
                input: [0, 1, 0, 2, 1, 0, 1, 3],
                expected: 5,
                description: "Caso típico de trapping con picos intermedios"
            },
            {
                input: [0, 2, 0, 3, 1, 0, 1, 3, 2, 1],
                expected: 9,
                description: "Ejemplo clásico con múltiples huecos"
            },

            {
                input: [0, 0, 0, 0],
                expected: 0,
                description: "Todo ceros, no se acumula agua"
            },
            {
                input: [1, 1, 1, 1],
                expected: 0,
                description: "Plano sin huecos"
            },
            {
                input: [4, 2, 0, 3, 2, 5],
                expected: 9,
                description: "Caso clásico con forma de valle"
            },
            {
                input: [5],
                expected: 0,
                description: "Un solo elemento"
            },
            {
                input: [5, 4],
                expected: 0,
                description: "Dos elementos decrecientes"
            },
            {
                input: [4, 5],
                expected: 0,
                description: "Dos elementos crecientes"
            },
            {
                input: [2, 0, 2],
                expected: 2,
                description: "Valle simple"
            },
            {
                input: [3, 0, 0, 0, 3],
                expected: 9,
                description: "Gran contenedor rectangular"
            },
            {
                input: [1, 2, 3, 4, 5],
                expected: 0,
                description: "Monótono creciente"
            },
            {
                input: [5, 4, 3, 2, 1],
                expected: 0,
                description: "Monótono decreciente"
            },
            {
                input: [2, 1, 0, 1, 2],
                expected: 4,
                description: "Forma de V perfecta"
            },

        ];

        tests.forEach((test, i) => {
            const result = fn(test.input);
            const passed = result === test.expected;

            console.log(
                `Test #${i + 1}: ${passed ? "✅ PASS" : "❌ FAIL"}`
            );
            if (!passed) {
                console.log("  Input:", test.input);
                console.log("  Expected:", test.expected);
                console.log("  Got:", result);
                console.log("  Desc:", test.description);
            }
        });
    }

}