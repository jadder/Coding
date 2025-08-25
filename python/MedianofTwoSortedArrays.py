class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        idx_1, idx_2 = len(nums1), len(nums2)
        newList = []
        exit1, exit2 = False, False
        x, y  = 0 , 0
        
        while exit1 is False and exit2 is False:
            if x < idx_1 : valueA = nums1[x] 
            else: 
                valueA = None
                exit1 = True
            
            if y < idx_2 : valueB = nums2[y]
            else: 
                valueB = None
                exit2 = True

            if valueA is not None and valueB is not None:
                if valueA < valueB:
                    newList.append(valueA)
                    x += 1
                else:
                    newList.append(valueB)
                    y += 1
            else:
                if valueA is None:
                    for jj in range(y, idx_2):
                        newList.append(nums2[jj])
                else:
                    for ii in range(x, idx_1):
                        newList.append(nums1[ii])
                
                exit1, exit2 = True, True

        pos = idx_1 + idx_2
        solution = 0
        if pos % 2 != 0:
            solution = newList[pos // 2]
        else:
            p = pos // 2
            solution = (newList[ p-1] + newList[p])
            solution /= float(2.0)

        return solution