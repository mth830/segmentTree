export class MaxLinearSearch {
  constructor(arrayReference) {
    this.arr = arrayReference;
  }
  findMax(start = 0, end = this.arr.length - 1) {
    if (start > end) {
      throw new Error("INVALID Start and end");
    }
    end = Math.min(end, this.arr.length);
    let max = this.arr[start];

    for (let i = start; i <= end; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    return max;
  }
}