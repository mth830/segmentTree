import { MaxLinearSearch } from './LinearSearch.js'
import { MaxSegmentTree } from './MaxSegmentTree.js'
const TEST_COUNT = 1000;
const test_size = 50000;

for (let i = 0; i < TEST_COUNT; i++) {
  const test = new Array(test_size).fill().map(x => Math.floor(Math.random() * 20 + 1));
  const mls = new MaxLinearSearch(test);
  const mst = new MaxSegmentTree();
  mst.buildFrom(test);
  const randomStart = Math.floor(Math.random() * test_size);
  const randomEnd = Math.floor(Math.random() * (test_size - randomStart)) + randomStart;
  const mlsResult = mls.findMax(randomStart, randomEnd);
  const mstResult = mst.getMax(randomStart, randomEnd);
  if (mlsResult !== mstResult) {
    console.log("MISMATCH");
    console.log([randomStart, randomEnd]);
    console.log(mlsResult);
    console.log(mstResult);
    console.log(test);
  }
}

// const sampleTest =  [ 3, 19, 15, 6, 4 ];
//  let mls = new MaxLinearSearch(sampleTest);
//  let mst = new MaxSegmentTree();
//  mst.buildFrom(sampleTest);
//  console.log(sampleTest)
//  console.log(mls.findMax(4, 4))
//  console.log(mst.getMax(4, 4))