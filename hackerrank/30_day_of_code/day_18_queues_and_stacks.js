// https://www.hackerrank.com/challenges/30-queues-stacks/problem
class Solution {
    constructor() {
        this.stack = [];
        this.queue = [];
    }
    pushCharacter(c) {
        this.stack.unshift(c);
    }
    enqueueCharacter(c) {
        this.queue.push(c);
    }
    popCharacter() {
        return this.stack.pop();
    }
    dequeueCharacter() {
        return this.queue.pop();
    }
}
