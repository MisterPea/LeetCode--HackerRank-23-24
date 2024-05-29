import LinkedList from './0000-LinkedList.mjs';

function ListNode( val, next ) {
  this.val = ( val === undefined ? 0 : val );
  this.next = ( next === undefined ? null : next );
}

function MergeLinkedList( list1, list2 ) {
  let root = new ListNode( null, null );
  let nextRoot = root;
  while ( list1 && list2 ) {
    if ( list1.val < list2.val ) {
      nextRoot.next = list1;
      list1 = list1.next;
    } else {
      nextRoot.next = list2;
      list2 = list2.next;
    }
    nextRoot = nextRoot.next;
  }
  // Remaining List Parts
  if ( list1 ) {
    nextRoot.next = list1;
  }
  if ( list2 ) {
    nextRoot.next = list2;
  }
  return root.next;
}

const list1 = LinkedList.create( [1] );
const list2 = LinkedList.create( [1] );
const list = MergeLinkedList( list1, list2 );
LinkedList.print( list );