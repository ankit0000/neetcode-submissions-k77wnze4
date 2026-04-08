class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy sentinels — never removed
        this.head = new Node(0, 0); // MRU side
        this.tail = new Node(0, 0); // LRU side
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _insertFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._remove(node);
        this._insertFront(node);
        return node.val;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }

        const node = new Node(key, value);
        this.map.set(key, node);
        this._insertFront(node);

        if (this.map.size > this.capacity) {
            const lru = this.tail.prev;
            this._remove(lru);
            this.map.delete(lru.key);
        }
    }
}