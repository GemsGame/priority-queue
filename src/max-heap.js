const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
	const newNode = new Node(data,priority);
	this.insertNode(newNode);
	this.shiftNodeUp(newNode);
    
	}

	pop() {
		const datacahe = this.detachRoot();
		const r = this.restoreRootFromLastInsertedNode(datacahe);
        
		this.shiftNodeDown(this.root);
	
		
	}

	detachRoot() {
		this.root = null;
	    
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null,
		this.parentNodes = []
	}

	insertNode(node) {
	
		this.root = node;
        
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
