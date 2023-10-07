function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  if (position === 0) {
    newNode.next = head;
    return newNode;
  } else {
    let currNode = head;
    let prevNode = null;
    let currPosition = 0;
    while (currPosition < position) {
      prevNode = currNode;
      currNode = currNode.next;
      currPosition++;
    }

    prevNode.next = newNode;
    newNode.next = currNode;
    return head;
  }
}
