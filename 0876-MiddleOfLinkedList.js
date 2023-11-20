/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

head = [1,2,3,4,5]
Output: [3,4,5]

head = [1,2,3,4,5,6]
Output: [4,5,6]
*/
/* 
The idea is to store each node in an Array, then we can 
find the middle of the Array (which still has the .next reference)

Time complexity: O(n) - Where n is the number of nodes
Space complexity: O(n) - We're storing the nodes in a n-sized Array
*/
var middleNode = function (head) {
  const seen = [];
  while (head) {
    seen.push(head);
    head = head.next;
  }
  return seen[Math.round((seen.length - 1) / 2)];
};

