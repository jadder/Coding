# https://leetcode.com/problems/add-two-numbers/description/
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from node import ListNode

class Solution(object):

    def addTwoNumbers(self, l1, l2):
        
        head = ListNode()                               # dummy node to simplify list construction
        current = head  
        carry = 0
        
        while l1 is not None or l2 is not None:         # process all nodes from both lists
            addend1 = l1.val if l1 else 0               # get current value from l1, or 0 if finished
            addend2 = l2.val if l2 else 0

            total = addend1 + addend2 + carry           # execute math operation
            carry = total // 10                         # compute new carry

            current.next = ListNode(total % 10)         # create new node with current digit
            current = current.next                      # move to the next node

            l1 = l1.next if l1 else None                # move l1/l2 pointer if possible
            l2 = l2.next if l2 else None

        if carry > 0:
            current.next = ListNode(carry)              # add final carry if it exists

        return head.next