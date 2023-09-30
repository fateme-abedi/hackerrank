function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
  } else {
    newNode.next = head;
    head = newNode;
  }
  return head;
}
