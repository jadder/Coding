/*'''
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Give nums = [2,7,11,15], target = 9
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1]
''' */

function TwoSum(numbers: number[], target: number): number[] {
    // create a kind of dictionary to store the values that we already seen
    let seen: Record<number, number> = {};
    let result : number[] = [];                     //following good practice of just have one return or at least few of them.

    for(let i=0; i<numbers.length; i++){            //Iterate through the list with both index and value
        let component = target - numbers[i]!;       //Calculate the number needed to reach the target
        
        if(component in seen){                      // If the needed number was already seen, return both indices
            result = [seen[component]!, i];
            break;
        }
        seen[numbers[i]!] = i;                      //Otherwise, store the current number and its index
    }

    return result;
}

// Example usage
const nums = [2,7,11,15], target = 9;

// This will print [0, 1] because nums[0] + nums[1] = 9
console.log(TwoSum(nums, target));