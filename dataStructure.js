// Given two queues as inputs, create a new queue by “weaving” them together

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(record) {
        this.data.unshift(record);
    }

    dequeue() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

const weave = function(queueOne, queueTwo) {
    const queueCombined = new Queue();

    while (queueOne.peek() || queueTwo.peek()) {
        if (queueOne.peek()) queueCombined.enqueue(queueOne.dequeue());
        if (queueTwo.peek()) queueCombined.enqueue(queueTwo.dequeue());
    }

    return queueCombined;
}

const one = new Queue();
    one.enqueue(1);
    one.enqueue(2);
    one.enqueue(3);

const two = new Queue();
    two.enqueue("one");
    two.enqueue("two");
    two.enqueue("three");

console.log(weave(one, two));
