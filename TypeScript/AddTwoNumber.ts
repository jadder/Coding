/**
https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode();               // dummy node to simplify list construction
		let current: ListNode = head;
		let carry = 0;

		while (l1 !== null || l2 !== null) {       // process all nodes from both lists
			const addend1 = l1 ? l1.val : 0;       // get current value from l1, or 0 if finished
			const addend2 = l2 ? l2.val : 0;

			const total = addend1 + addend2 + carry; // execute math operation
			carry = Math.floor(total / 10);          // compute new carry

			current.next = new ListNode(total % 10); // create new node with current digit
			current = current.next;                  // move to the next node

			l1 = l1 ? l1.next : null;               // move l1/l2 pointer if possible
			l2 = l2 ? l2.next : null;
		}

		if (carry > 0) {
			current.next = new ListNode(carry);      // add final carry if it exists
		}

		return head.next;
};
