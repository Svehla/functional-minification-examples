const R = require('ramda')

const data0 = [1, 2, 3, 4, 5, 6, 7];
const data1 = [7, 6, 5, 4, 3, 2, 1];
const data2 = [3, 3, 3, 3, 3, 3, 3];
// imperative
let itemSum;
const averageOfArrays0 = (...args) => {
	let resultData = [];
	for (let i = 0; i < args.length; i++) {
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




const averageOfArrays1 = R.pipe(R.unapply(R.transpose), R.map(R.mean));
const dataAverage = averageOfArrays1(data0, data1, data2);


// komprese 80.27777777777777
console.log(dataAverage)
console.log(averageOfArrays0(data0, data1, data2))