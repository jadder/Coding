/*'''
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Give nums = [2,7,11,15], target = 9
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1]
''' */

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// function declaration
vector<int> TwoSum(const vector<int>& nums, int target);

int main(){
    vector<int> numeros = {21, 7, 14, 15, 2};
    int Target = 9;

    vector<int> result = TwoSum(numeros, Target);

    if(!result.empty()){
        cout << "["<< result[0] << ", " << result[1] << "] " << endl;
    }

    return 0;
}

// function definition
vector<int> TwoSum(const vector<int>& nums, int target){ 
    unordered_map<int, int> seen;                       // dictionary behavior
    vector<int> result ; //following good practice of just have one return or at least few of them.
    
    for(size_t i = 0; i < nums.size(); ++i){            // check each elements to get the complement
        int complement = target - nums[i]; 
        
        if(seen.find(complement) != seen.end()){        // If the needed number was already seen, return both indices
            result = { seen[complement], (int)i};
            break;
        }
        seen[nums[i]] = i;                             // Otherwise, store the current number and its index 
    }

    return result;
}