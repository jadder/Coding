/*'''
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Give nums = [2,7,11,15], target = 9
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1]
''' */
import java.util.HashMap;

public class TwoSum{

    public int[] twosum(int[] nums, int target){
        HashMap<Integer,Integer> seen = new HashMap<>();        // dictionary behavior
        int[] result = new int[2];                              //following good practice of just have one return or at least few of them.

        for(int i=0; i<nums.length; i++) {                      // check each elements to get the complement
            int complement = target - nums[i];

            if(seen.containsKey(complement)){                   // If the needed number was already seen, return both indices
                result[0] = seen.get(complement);
                result[1] = i;
                break;
            } 
            seen.put(nums[i], i);                               // Otherwise, store the current number and its index
        }

        return  result;
    }
}