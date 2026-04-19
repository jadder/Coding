{
    class Solution {
        merge(nums1: number[], m: number, nums2: number[], n: number): void {
            let n1: number = m - 1;
            let n2: number = n - 1;
            let final: number = n + m - 1;

            while (n2 >= 0) {
                if (nums1[n1] > nums2[n2]) {
                    nums1[final] = nums1[n1];
                    n1--;
                }else{
                    nums1[final] = nums2[n2];
                    n2--;
                }
                final--;
            }
        }
    }

    // Helper para testear
    function runTest(
        nums1: number[],
        m: number,
        nums2: number[],
        n: number,
        expected: number[]
    ): void {
        const sol = new Solution();
        const inputCopy = [...nums1];

        sol.merge(nums1, m, nums2, n);

        const pass = JSON.stringify(nums1) === JSON.stringify(expected);

        console.log(pass ? "✅ PASS" : "❌ FAIL");
        if (!pass) {
            console.log("Input nums1:", inputCopy);
            console.log("nums2:", nums2);
            console.log("Expected:", expected);
            console.log("Got:", nums1);
        }
    }

    // ================= TEST CASES =================

    // Caso 1
    runTest([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]);

    // Caso 2
    runTest([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3, [1, 2, 3, 4, 5, 6]);

    // Caso 3
    runTest([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3, [1, 2, 3, 4, 5, 6]);

    // Caso 4 (nums2 vacío)
    runTest([1, 2, 3], 3, [], 0, [1, 2, 3]);

    // Caso 5 (nums1 vacío)
    runTest([0, 0, 0], 0, [2, 5, 6], 3, [2, 5, 6]);

    // Caso 6 (ambos vacíos)
    runTest([], 0, [], 0, []);

    // Caso 7 (duplicados)
    runTest([1, 2, 2, 3, 0, 0, 0], 4, [2, 2, 5], 3, [1, 2, 2, 2, 2, 3, 5]);

    // Caso 8 (todos iguales)
    runTest([1, 1, 1, 0, 0, 0], 3, [1, 1, 1], 3, [1, 1, 1, 1, 1, 1]);

    // Caso 9 (negativos)
    runTest([-3, -1, 0, 0, 0], 2, [-2, 2, 3], 3, [-3, -2, -1, 2, 3]);

    // Caso 10 (todo al inicio)
    runTest([5, 6, 7, 0, 0, 0], 3, [1, 2, 3], 3, [1, 2, 3, 5, 6, 7]);

    // Caso 11 (todo al final)
    runTest([1, 2, 3, 0, 0, 0], 3, [7, 8, 9], 3, [1, 2, 3, 7, 8, 9]);

    // Caso 12 (mínimo)
    runTest([0], 0, [1], 1, [1]);

    // Caso 13 (edge pequeño)
    runTest([2, 0], 1, [1], 1, [1, 2]);

    // // Caso 14 (stress test)
    // runTest(
    //     new Array(1000).fill(0),
    //     0,
    //     new Array(1000).fill(1),
    //     1000,
    //     new Array(1000).fill(1)
    // );
}