import java.util.HashMap;

public class TwoSum{

    public int[] twosum(int[] nums, int target){
        HashMap<Integer,Integer> seen = new HashMap<>(); 
        int[] result = new int[2];

        for(int i=0; i<nums.length; i++) {
            int complement = target - nums[i];

            if(seen.containsKey(complement)){
                result[0] = seen.get(complement);
                result[1] = i;
                break;
            } 
            seen.put(nums[i], i);
        }

        return  result;
    }
}