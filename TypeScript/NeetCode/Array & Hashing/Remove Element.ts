function removeElement(nums: number[], val: number): number {
    let t: number = 0; // not used (can be removed)

    // iterate through the entire array
    for (let i = 0; i < nums.length; i++) {

        // if we find the value we want to remove
        if (nums[i] === val) {

            // remove the element at the current index
            nums.splice(i, 1);

            // step back one position because the array shrinks
            // and the next element shifts into this index
            i--;
        }
    }

    // return the new length of the array (as required)
    return nums.length;
}


// test
let Input: number[] = [1, 1, 2, 3, 4];
let val: number = 1;

console.log(removeElement(Input, val)); // 3