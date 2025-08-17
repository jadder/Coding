'''
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Give nums = [2,7,11,15], target = 9
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1]
'''

def TwoSum(nums, target):
    # Dictionary to store numbers we have seen so far
    # Key = number, Value = index
    seen = {}

    # Iterate through the list with both index and value
    for i, num in enumerate(nums):
        # Calculate the number needed to reach the target
        complement = target - num

        # If the needed number was already seen, return both indices
        if complement in seen:
            return [seen[complement], i]

        # Otherwise, store the current number and its index
        seen[num] = i


# Example usage
nums = [2, 7, 11, 15]
target = 9

# This will print [0, 1] because nums[0] + nums[1] = 9
print(TwoSum(nums, target))
