class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.range = [-1, -1];
  }
}

export class MaxSegmentTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  buildFrom(arr) {
    this.root = this.buildRecursive(arr);
    this.size = arr.length;
    this.root.range = [0, arr.length - 1];
  }
  buildRecursive(arr, start = 0, end = arr.length - 1) {
    if (start < 0 || end >= arr.length || start > end) {
      throw new Error("Invalid start and end indexes");
    }
    let node = new Node();
    node.range = [start, end];
    if (end === start) {
      node.val = arr[start];
      return node;
    }

    const midPoint = Math.floor((start + end) / 2);
    let left = this.buildRecursive(arr, start, midPoint);
    let right = this.buildRecursive(arr, midPoint + 1, end);
    node.left = left;
    node.right = right;
    node.val = Math.max(node.left.val, node.right.val);
    return node;
  }

  getMax(start = 0, end = this.size - 1) {
    if (start < 0 || start > end) {
      throw new Error("Invalid start and end indexes")
    }
    end = Math.min(end, this.size - 1);
    return this.getMaxRec(start, end, this.root);
  }

  getMaxRec(start, end, node) {

    let [rangeStart, rangeEnd] = node.range;
    if (start <= rangeStart && end >= rangeEnd) {
      return node.val;
    }
    const midPoint = Math.floor((rangeStart + rangeEnd) / 2);

    let max = -Infinity;

    if (start <= midPoint) {
      max = this.getMaxRec(start, (Math.min(end, midPoint)), node.left);
    }
    if (end > midPoint) {
      let rightMax = this.getMaxRec(Math.max(start, midPoint + 1), end, node.right);
      if (rightMax > max) {
        max = rightMax;
      }
    }
    return max;
  }
}
