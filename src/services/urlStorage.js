class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Add an element with a priority
  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Sort by priority
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.queue.length === 0) return null;
    return this.queue.shift().element; // Remove the first element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the current size of the queue
  size() {
    return this.queue.length;
  }
}

const urlQueue = new PriorityQueue();

function addUrl(url, priority = 1) {
  urlQueue.enqueue(url, priority);
}

function getNextUrl() {
  return urlQueue.isEmpty() ? null : urlQueue.dequeue();
}

module.exports = { addUrl, getNextUrl };
