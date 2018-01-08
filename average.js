const R = require('ramda')

const data0 = [1, 0, 3, 6, 5, 7, 7];
const data1 = [9, 6, 5, 4, 3, 9, 6];
const data2 = [3, 3, 3, 3, 3, 3, 3];
averageOfArrays0(data0, data1, data2)
// -> [4.3, 3, 3.6, 4.3, 3.6, 6.3, 5.3]

const matrix = [
	data0,
	data1,
	data2,
]
const transMatrix = [ 
	[ 1, 9, 3 ], 				// sum -> 13
  [ 0, 6, 3 ], 				// sum -> 9
  [ 3, 5, 3 ], 				// sum -> 11
  [ 6, 4, 3 ], 				// sum -> 13
  [ 5, 3, 3 ], 				// sum -> 11
  [ 7, 9, 3 ], 				// sum -> 19 
  [ 7, 6, 3 ]  				// sum -> 16
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
const averageOfArrays0 = (...args) => {
	let resultData = [];
	// for each array
	for (let i = 0; i < args.length; i++) {
		// create sum of items with same index
		for (let j = 0; j < args[i].length; j++) {
			if (!resultData[j]) {
				resultData[j] = 0;
			};
			resultData[j] += args[i][j];
		};
	};
	for (let i = 0; i < args[0].length; i++) {
		resultData[i] = resultData[i] / args.length
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


const averageOfArrays1 = (...args) => {
	const transposeMatrix = R.transpose(args)
	const meanArr = R.map(R.mean)(transposeMatrix)
	return meanArr
};

const averageOfArrays2 = (...args) => (
	R.map(R.mean)(R.transpose(args))
);

const averageOfArrays3 = (...args) => (
	R.pipe(R.transpose, R.map(R.mean))(args)
);

const averageOfArrays4 = 
	R.pipe(R.unapply(R.transpose), R.map(R.mean));


console.log(averageOfArrays0(data0, data1, data2))
console.log(averageOfArrays1(data0, data1, data2))
console.log(averageOfArrays2(data0, data1, data2))
console.log(averageOfArrays3(data0, data1, data2))
console.log(averageOfArrays4(data0, data1, data2))


// komprese 