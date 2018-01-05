const R = require('ramda')

const arrOfIds1 = [1, 2, 3, 5]
const arrOfIds2 = [3, 5, 2, 1, 6]
// in my case lib return unstable data
const sameItems1 = (arr1, arr2) => 
	R.isEmpty(
		R.symmetricDifference(arr1, arr2)
	)



const sameItems2 = (arr1, arr2) => 
	R.compose(
		R.isEmpty,
		R.symmetricDifference
	)(arr1, arr2)


const sameItems3 = R.compose(R.isEmpty, R.symmetricDifference)

sameItems3(arrOfIds1, arrOfIds2) // false