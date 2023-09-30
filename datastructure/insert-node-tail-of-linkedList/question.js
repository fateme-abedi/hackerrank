function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    return newNode;
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.next = null;
  return head;
}
