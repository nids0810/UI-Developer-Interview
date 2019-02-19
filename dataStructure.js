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

// Without keeping a counter, return the middle value of a linked list
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
}

function midpoint(list) {
    let moveByOne = list.head;
    let moveByTwo = list.head;

    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
    }

    return moveByOne;
}

const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.insertHead(4);
chain.insertHead(5);
        
console.log(midpoint(chain).data);
// Without keeping a counter, return the middle value of a linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
}

function midpoint(list) {
    let moveByOne = list.head;
    let moveByTwo = list.head;

    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
    }

    return moveByOne;
}

const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.insertHead(4);
chain.insertHead(5);
        
console.log(midpoint(chain).data);

// Without keeping node references, check if a linked list is circular
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
}

function circular(list) {
    let moveByOne = list.head;
    let moveByTwo = list.head;

    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
        if (moveByTwo === moveByOne) return true;
    }

    return false;
}

const chain = new LinkedList();
chain.insertHead(1);
chain.insertHead(2);
chain.insertHead(3);
chain.head.next.next.next = chain.head;
        
console.log(circular(chain));

// Bubble sort - most inefficient O(n2)
const bubbleSort = function(arr) {
   let swapped;
   do {
        swapped = false;
        arr.forEach(function(item, i){
            if(item > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        });

   } while(swapped);
   return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1, 10]));

// Insertion sort - inefficient O(n2)
const insertionSort = function(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                let temp = array.splice(i, 1);
                array.splice(j, 0, temp[0]);
            }
        }
    }
    return array;
};

console.log(insertionSort([5, 4, 3, 2, 1, 1, 7]));

// Merge sort - efficient O(nlogn)
const mergeSort = function(array) {
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle),
        right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = function(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
};

console.log(mergeSort([5, 4, 3, 2, 1, 1, 7]));

// Counting Sort - most efficient O(n + k)
const countingSort = function(array, max) {
    const counts = new Array(max + 1);
    counts.fill(0);
    array.forEach(function(value){counts[value]++});

    const result = [];
    let resultIndex = 0;

    counts.forEach(function(count, index) {
        for (let i = 0; i < count; i++) {
            result[resultIndex] = index;
            resultIndex++;
        }
    });

    return result;
};

console.log(countingSort([5, 4, 3, 2, 1, 1, 7], 7));
