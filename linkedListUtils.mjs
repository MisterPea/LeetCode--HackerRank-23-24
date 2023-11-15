/**
 * Definition for a linked list
 * @param {any} val Any value to be added to a linked list node
 * @param {ListNode} next Reference to the next list node
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * Function to create a linked list from an array
 * @param {any[]} arr Array of elements to be converted to a linked list
 */
export function createLinkedList(arr) {
  let head = null;
  let nextHead = null;
  for (let i = 0; i < arr.length; i += 1) {
    if (head === null) {
      head = new ListNode(arr[i]);
      nextHead = head;
    } else {
      nextHead.next = new ListNode(arr[i]);
      nextHead = nextHead.next;
    }
  }
  return head;
}

export function printLinkedList(head){
  const outputArray = []
  let localHead = head
  while(localHead){
    outputArray.push(localHead.val)
    localHead = localHead.next;
  }
  console.log(outputArray.join(' -> '))
}
