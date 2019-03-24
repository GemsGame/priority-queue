const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
    if(maxSize){
		this.maxSize = maxSize;
	} else {
		this.maxSize = 30;
	}
	this.heap = new MaxHeap();
	}

	push(data, priority) {
	 this.data = data;
	 this.priority = priority;
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
