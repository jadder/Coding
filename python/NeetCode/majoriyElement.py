from typing import List
from collections import defaultdict

class Solution:
    def majoriyElement(self, nums: List[int]) -> List[int]:
        count = defaultdict(int)

        for n in nums:
            count[n] += 1

            if len(count) <= 2:
                continue
            new_count = defaultdict(int)
            for n, c in count.items():
                if c > 1:
                    new_count[n] = c - 1
            count = new_count

        res = []
        for n in count:
            if nums.count(n) > len(nums) // 3:
                res.append(n)
        return res

input = [5, 2, 3, 2, 2, 2, 2, 5, 5, 5]
result = Solution().majoriyElement(input)
print(result)