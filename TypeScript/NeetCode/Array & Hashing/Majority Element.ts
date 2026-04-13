function majorityElement(nums: number[]): number {
    const dict: Record<number, number> = {};
    
    for (const n of nums) {
        dict[n] = (dict[n] || 0) + 1;
    }
    
    let temp: number = 0;
    let max: number = 0;
    
    // recorrer diccionario
    const siz: number = nums.length / 2;
    for (const key in dict) {
        const value = dict[key];

        if (value > max && value > siz) {
            max = value;
            temp = Number(key);
        }
    }

    return temp;
}


const nums:number[] = [5,5,1,1,1,5,5];  // 5

const result: number= majorityElement(nums);

console.log(result);