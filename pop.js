// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this     
    }

    pop () {
        // if the list is empty
        if (!this.head) return undefined

        let current = this.head
        let newTail = current
        // loop through the list
        while (current.next) {
            newTail = current
            current = current.next
        }
        // hit the end of the list (current.next === null), set the tail to newTail
        this.tail = newTail
        // clear up that the new tail by assigning the next pointer to be null
        this.tail.next = null
        this.length --

        // the case when the list pop out all the nodes and empty, we need to set all the pointers to null
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }        
        return current
        
    }
    traverse () {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

let list = new SingleLinkedList ()
list.push('hello')
list.push('world')
list.push('is')
list.push('beautiful')

console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
// console.log(list.pop())
console.log(list)