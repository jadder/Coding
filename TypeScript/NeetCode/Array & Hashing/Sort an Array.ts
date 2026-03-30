function sortArray(nums: number[]): number[] {
    let repetir: boolean = true;
    let tamanio: number = nums.length;
    let temp: number = 0;

    while (repetir) {
        repetir = false;
        for (let i = 0; i < tamanio + 1; i++) {
            if (nums[i] > nums[i + 1]) {
                temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                repetir = true;
            }
        }
    }

    return nums;
}


let numbers: number[] = [10, 9, 1, 1, 1, 2, 3, 1];
console.log(sortArray(numbers));