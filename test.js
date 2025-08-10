import { MaxLinearSearch } from './LinearSearch.js'
import { MaxSegmentTree } from './MaxSegmentTree.js'
import { MaxSegmentTreeArray } from './MaxSegmentTreeArray.js'
const TEST_COUNT = 1e3;
const TEST_SIZE = 1e6;
const MAX_VALUE = 1e3;

const VALIDITY_CHECK = false;
const SPEED_COMPARISON_ENABLED = true;
if (VALIDITY_CHECK) {
  for (let i = 0; i < TEST_COUNT; i++) {
    const test = new Array(TEST_SIZE).fill().map(x => Math.floor(Math.random() * MAX_VALUE + 1));
    const mls = new MaxLinearSearch(test);
    const mst = new MaxSegmentTree();
    const mstA = new MaxSegmentTreeArray();
    mst.buildFrom(test);
    mstA.buildFrom(test);
    const randomStart = Math.floor(Math.random() * TEST_SIZE);
    const randomEnd = Math.floor(Math.random() * (TEST_SIZE - randomStart)) + randomStart;
    const mlsResult = mls.findMax(randomStart, randomEnd);
    const mstResult = mst.getMax(randomStart, randomEnd);
    const mstAResult = mstA.getMax(randomStart, randomEnd);

    if (mlsResult !== mstResult ||mstAResult!==mstAResult) {
      console.log("MISMATCH");
      console.log([randomStart, randomEnd]);
      console.log(mlsResult);
      console.log(mstResult);
      console.log(mstAResult);
      console.log(test);
    }
  }
}
if (SPEED_COMPARISON_ENABLED) {
  const test = new Array(TEST_SIZE).fill().map(x => Math.floor(Math.random() * MAX_VALUE + 1));
  const mls = new MaxLinearSearch(test);
  console.time("linearSearch");
  for (let i = 0; i < TEST_COUNT; i++) {
    const randomStart = Math.floor(Math.random() * TEST_SIZE);
    const randomEnd = Math.floor(Math.random() * (TEST_SIZE - randomStart)) + randomStart;
    mls.findMax(randomStart, randomEnd);
  }
  console.timeEnd("linearSearch")
  const mst = new MaxSegmentTreeArray();
  mst.buildFrom(test)
  console.time("ArrayBasedSegmentTree");

  for (let i = 0; i < TEST_COUNT; i++) {
    const randomStart = Math.floor(Math.random() * TEST_SIZE);
    const randomEnd = Math.floor(Math.random() * (TEST_SIZE - randomStart)) + randomStart;
    mst.getMax(randomStart, randomEnd);
  }
  console.timeEnd("ArrayBasedSegmentTree");
}