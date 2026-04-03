function sortColors(nums: number[]) {
    let cuenta: [number, number, number] = [0, 0, 0];

    for (const n of nums) {

        switch (n) {
            case 0: cuenta[0] = cuenta[0] + 1; break;
            case 1: cuenta[1] = cuenta[1] + 1; break;
            case 2: cuenta[2] = cuenta[2] + 1; break;
        }
    }

    let result: number[] = [];

    for (let j = 0; j < cuenta.length; j++) {
        for (let i = 0; i < cuenta[j]; i++) {
            result.push(j);
        }
    }

    for(let i=0; i<nums.length; i++){
        nums[i] = result[i];
    }

    return nums;
}


const nums: number[] = [1, 0, 1, 2]
const Output: number[] = [0, 1, 1, 2];


let result: number[] = [];
result = sortColors(nums);
console.log(result);