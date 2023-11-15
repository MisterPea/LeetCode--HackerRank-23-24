import { createLinkedList, printLinkedList } from "./linkedListUtils.mjs";
/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
*/


// * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let mainHead = new ListNode(0);
  let currHead = mainHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    currHead.next = new ListNode(sum);
    currHead = currHead.next;
  }
  return mainHead.next;
};

const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l2 = createLinkedList([9, 9, 9, 9]);
const out = addTwoNumbers(l1, l2);
printLinkedList(out);