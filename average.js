const R = require('ramda')

const data = [
  [1, 0, 3, 6, 5, 7, 7], // chart1
  [9, 6, 5, 4, 3, 9, 6], // chart2
  [3, 3, 3, 3, 3, 3, 3], // chart3
] 
// averageOfArrays0(data)
// -> [4.3, 3, 3.6, 4.3, 3.6, 6.3, 5.3]

const transMatrix = [ 
  [ 1, 9, 3 ],
  [ 0, 6, 3 ],
  [ 3, 5, 3 ],
  [ 6, 4, 3 ],
  [ 5, 3, 3 ],
  [ 7, 9, 3 ],
  [ 7, 6, 3 ], 
]

// === 
[ 13, 9, 11, 13, 11, 19, 16 ]

const transposeMatrix = [ 
  [ 1, 9, 3 ], // mean -> 4.3
  [ 0, 6, 3 ], // mean -> 3
  [ 3, 5, 3 ], // mean -> 3.6
  [ 6, 4, 3 ], // mean -> 4.3
  [ 5, 3, 3 ], // mean -> 3.6
  [ 7, 9, 3 ], // mean -> 6.3 
  [ 7, 6, 3 ]  // mean -> 5.3
]

[4.3, 3, 3.6, 4.3, 3.6, 6.3, 5.3]

// imperative
let itemSum;
const averageOfArrays0 = matrix => {
  let resultData = [];
  // for each array
  for (let i = 0; i < matrix.length; i++) {
    // create sum of items with same index
    for (let j = 0; j < matrix[i].length; j++) {
      if (!resultData[j]) {
        resultData[j] = 0;
      };
      resultData[j] += matrix[i][j];
    };
  };
  for (let i = 0; i < matrix[0].length; i++) {
    resultData[i] = resultData[i] / matrix.length
  }
  return resultData;
};


// 1. get sum of array with same index
// 2. calculate mean value (sum/length)

/*
1. get array with same index
  - add arr to 2 dimension matrix
  - transpose
2. calculate mean value
  - get sum of transpose column
  - divide by length of array
*/


const averageOfArrays1 = matrix => {
  const transposeMatrix = R.transpose(matrix)
  const meanArr = R.map(R.mean)(transposeMatrix)
  return meanArr
};

const averageOfArrays2 = matrix => (
  R.map(R.mean)(R.transpose(matrix))
);

const averageOfArrays3 = matrix => (
  R.pipe(R.transpose, R.map(R.mean))(matrix)
);

const averageOfArrays4 = 
  R.pipe(R.transpose, R.map(R.mean));


console.log(averageOfArrays0(data))
console.log(averageOfArrays1(data))
console.log(averageOfArrays2(data))
console.log(averageOfArrays3(data))
console.log(averageOfArrays4(data))


// komprese 