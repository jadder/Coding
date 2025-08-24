'''3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/ '''
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 0:
            return 0
        elif len(s) == 1:
            return 1
        elif len(s) == 2:
            if s[0] == s[1]:
                return 1
            else:
                return 2
        

        exit = False
        left_window = -1
        right_window = -1
        seen = set()
        answer = 0
        max = 0

        rvalue = '' 
        lvalue = ''
        
        while exit is False:
            if right_window + 1 < len(s) :
                right_window += 1
                rvalue = s[right_window]

                if rvalue not in seen:
                    seen.add(rvalue)
                    answer += 1
                    if answer > max :
                        max = answer
                else:
                    if left_window < right_window:
                        left_window += 1
                        lvalue = s[left_window]
                        seen.remove(lvalue)
                        right_window -= 1
                        answer -= 1
                    else:
                        break
            else:
                exit = True

        return max
