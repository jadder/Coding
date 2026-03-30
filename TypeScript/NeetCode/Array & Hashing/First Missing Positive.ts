function  firstMissingPositive(nums: number[]): number {
    let small: number = Number.MAX_VALUE ;
    let temp: number = 0;

    let narray:number[] = [];

    for(const n of nums){
        if(n > 0){
            narray.push(n);
            if(small > n){
                small = n;
            }
        }
    } if (narray.length === 0) return 1;

    narray.sort((a, b) => a - b);

    temp = 1;
    while(narray.indexOf(temp) !== -1){
        temp++;
    }
    return temp;
}
let numeros: number[] = [-2,-1,0];
numeros = [7,8,9,11,12];

console.log(firstMissingPositive(numeros));