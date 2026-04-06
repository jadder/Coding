function productExceptSelf(nums: number[]): number[] {
    // flag → tells if there is at least one zero in the array
    let flag: boolean = false;

    // cont → counts how many zeros exist
    let cont: number = 0;

    // prod → stores the product of all non-zero numbers
    let prod: number = 0;

    // first loop → calculate product (ignoring zeros) and count zeros
    for (const n of nums) {
        if (n != 0) {
            // initialize prod to 1 only when first non-zero appears
            if (prod === 0) {
                prod = 1;
            }
            prod *= n;
        } else {
            // found a zero → increase counter and mark flag
            cont++;
            flag = true;
        }
    }

    // ⚠️ this reuses the same array (mutates input)
    let result: number[] = nums;

    // second loop → build result based on zero cases
    for (let n = 0; n < nums.length; n++) {

        // case 1: no zeros → divide total product
        if (nums[n] != 0 && flag === false) {
            result[n] = prod / nums[n];
        }

        // case 2: exactly one zero → only that index gets product
        else if (nums[n] === 0 && flag === true && cont <= 1) {
            result[n] = prod;
        }

        // case 3: more than one zero OR other positions when a zero exists
        else {
            result[n] = 0;
        }
    }

    return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)  (but modifies input array ⚠️)
*/