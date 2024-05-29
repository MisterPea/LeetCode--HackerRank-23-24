function listNode( val, next ) {
  this.val = ( val === undefined ? 0 : val );
  this.next = ( next === undefined ? null : next );
}

const LinkedList = {
  create: ( values ) => {
    let root = undefined;
    let nextRoot = root;
    for ( let i = 0; i < values.length; i += 1 ) {
      if ( !root ) {
        root = new listNode( values[i] );
        nextRoot = root;
      } else {
        nextRoot.next = new listNode( values[i] );
        nextRoot = nextRoot.next;
      }
    }
    return root;
  },
  print: ( root ) => {
    let currRoot = root;
    const output = []
    while ( currRoot) {
      output.push(currRoot.val)
      currRoot = currRoot.next;
    }
    console.log(output.join(' → '))
  }
};

export default LinkedList;