class MyCircularQueue {
    private queue: Array<number>;
    private capacity: number;
    private size: number;
    private head: number;

    /*
    class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.capacity = k;
        this.head = 0;
        this.count = 0;
    }
     */
    constructor(k: number) {
        this.queue = new Array(k);
        this.capacity = k;
        this.size = 0;
        this.head = 0;
    }

    /*
        enQueue(value) {
        if (this.count === this.capacity) return false;
        const index = (this.head + this.count) % this.capacity;
        this.queue[index] = value;
        this.count++;
        return true;
    }
     */
    enQueue(value: number): boolean {
        if (!this.isFull()) {
            console.log(`value: ${this.Front() + 1}`)
            this.queue[this.Front() === -1 ? 0 : this.Rear() + 1] = value;
            this.size++;
            return true
        }
        return false;

    }

    /*
        deQueue() {
        if (this.count === 0) return false;
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return true;
    }
     */
    deQueue(): boolean {
        // Loop Head
        if (this.isEmpty()) {
            return false;
        }
        this.queue[this.head] = null;
        this.head = this.head > this.capacity ? 0 : this.head + 1
        console.log(`Head Size: ${this.head}`)
        console.log(`test: ${this.head > this.capacity ? 0 : this.head + 1}`)
        this.size--;
        return true
    }

    /*
        Front() {
        if (this.count === 0) return -1;
        return this.queue[this.head];
    }
     */
    Front(): number {
        if (this.isEmpty()) return -1
        return this.head
    }

    /*
        Rear() {
        if (this.count === 0) return -1;
        const tail = (this.head + this.count - 1) % this.capacity;
        return this.queue[tail];
    }
     */
    Rear(): number {
        if (this.isEmpty()) return -1
        return this.queue[this.head + (this.size - 1) % this.capacity]
    }

    /*
        isEmpty() {
        return this.count === 0;
    }

     */
    isEmpty(): boolean {
        return this.size === 0;

    }

    /*
    isFull() {
        return this.count === this.capacity;
    }
    */
    
    isFull(): boolean {
        return this.size === this.capacity;

    }
}

const myCircularQueue = new MyCircularQueue(6);
console.log(myCircularQueue.enQueue(6)) // return True
console.log(myCircularQueue.Rear()) // return 6
console.log(myCircularQueue.Rear()) // return 6
console.log(myCircularQueue.deQueue()) // return true
console.log(myCircularQueue.enQueue(5))     // return true
console.log(myCircularQueue.Rear())   // return 5
console.log(myCircularQueue.deQueue())  // return true
console.log(myCircularQueue.Front()) // return -1
console.log(myCircularQueue.deQueue())     // return false
console.log(myCircularQueue.deQueue())     // return false
console.log(myCircularQueue.deQueue())     // return false