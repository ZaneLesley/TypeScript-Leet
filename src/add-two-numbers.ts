class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode(0)
    let curr = head
    let carry = 0

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0

        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10)
        curr = curr.next

        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next
    }
    return head.next
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(5))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
