// Container With Most Water
// https://neetcode.io/problems/max-water-container/question
{
    class Solution {
        /**
         * @param {number[]} heights
         * @return {number}
         */
        maxArea(heights: number[]): number {

            let answer: number = -1;

            let left_max_height: number = 0;

            for (let left = 0; left < heights.length - 1; left++) {
                if (left_max_height < heights[left]) {
                    left_max_height = heights[left];
                }
                if (left > 0 && heights[left] < left_max_height) {
                    continue;
                }
                for (let right = heights.length - 1; right > left; right--) {
                    let temp: number = calc(heights[left], left, heights[right], right);
                    if (answer < temp) {
                        answer = temp;
                    }
                }

            }

            function calc(alt_iz: number, pos_iz: number, alt_der: number, pos_dec: number): number {
                if (alt_iz > alt_der) {
                    return alt_der * (pos_dec - pos_iz);
                } else {
                    return alt_iz * (pos_dec - pos_iz);
                }
            }

            return answer;

        }
    }

    function runTests(fn: (height: number[]) => number) {
        const tests: { input: number[], expected: number, description: string }[] = [
            {
                input: [1, 7, 2, 5, 4, 7, 3, 6],
                expected: 36,
                description: "Caso base del ejemplo"
            },
            {
                input: [2, 2, 2],
                expected: 4,
                description: "Todas las alturas iguales"
            },
            {
                input: [1, 1],
                expected: 1,
                description: "Mínimo tamaño posible"
            },
            {
                input: [0, 0, 0, 0],
                expected: 0,
                description: "Todos ceros"
            },
            {
                input: [1, 2, 3, 4, 5],
                expected: 6,
                description: "Alturas crecientes"
            },
            {
                input: [5, 4, 3, 2, 1],
                expected: 6,
                description: "Alturas decrecientes"
            },
            {
                input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
                expected: 49,
                description: "Caso clásico de LeetCode"
            },
            {
                input: [1, 2, 1],
                expected: 2,
                description: "Pico en el medio"
            },
            {
                input: [4, 3, 2, 1, 4],
                expected: 16,
                description: "Mejor solución en extremos"
            },
            {
                input: [1, 3, 2, 5, 25, 24, 5],
                expected: 24,
                description: "Alturas altas cerca del final"
            },
            {
                input: [1000, 1, 1000],
                expected: 2000,
                description: "Valores máximos con distancia"
            },
            {
                input: Array(1000).fill(1),
                expected: 999,
                description: "Máximo tamaño con valores iguales"
            },
            {
                input: [0, 1000, 0, 1000],
                expected: 2000,
                description: "Alturas máximas separadas"
            },
            {
                input: [2, 3, 4, 5, 18, 17, 6],
                expected: 17,
                description: "Máximo no usa extremos"
            },
            {
                input: [1, 1000, 1, 1, 1, 1000, 1],
                expected: 4000,
                description: "Dos picos altos separados"
            }
        ];

        tests.forEach((test, index) => {
            const result = fn(test.input);
            const pass = result === test.expected;

            console.log(`Test ${index + 1}: ${test.description}`);
            console.log(`Input: ${JSON.stringify(test.input)}`);
            console.log(`Expected: ${test.expected}, Got: ${result}`);
            console.log(pass ? "✅ PASS" : "❌ FAIL");
            console.log("------");
        });
    }

    // Ejecutar tests
    const solution = new Solution();
    runTests(solution.maxArea.bind(solution));
}