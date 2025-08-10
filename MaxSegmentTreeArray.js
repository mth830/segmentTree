export class MaxSegmentTreeArray {
  constructor() {
    this.mst = [];
    this.size = 0;
  }
  buildFrom(arr) {
    const n = arr.length;
    this.size = n;
    this.mst = new Array(4 * n).fill(-Infinity);
    this.buildRec(arr);
  }
  buildRec(arr, i = 0, left = 0, right = arr.length - 1) {
    if (left === right) {
      this.mst[i] = arr[left];
      return;
    }
    const midPoint = Math.floor((left + right) / 2);
    this.buildRec(arr, 2 * i + 1, left, midPoint);
    this.buildRec(arr, 2 * i + 2, midPoint + 1, right);
    this.mst[i] = Math.max(this.mst[2 * i + 1], this.mst[2 * i + 2]);
  }
  getMax(left,right){
    return this.getMaxRec(0,left,right);
  }
  getMaxRec(i=0,targetLeft=0,targetRight=this.size-1,left = 0, right = this.size-1){
    if(targetLeft<=left && targetRight>= right){
      return this.mst[i];
    }
    const midPoint = Math.floor((left+right)/2);
    let max = -Infinity;
    if(targetLeft<=midPoint){
      max = this.getMaxRec(2*i+1,targetLeft,targetRight,left,midPoint)
    }
    if(targetRight>midPoint){
      max=Math.max(max,this.getMaxRec(2*i+2,targetLeft,targetRight,midPoint+1,right))
    }
    return max
  }
}