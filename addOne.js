const R = require('ramda')

const data = [1, 2, 3]

// imperative
const addOne1 = data => {
	let newData = []
	for(let i = 0; i < data.length; i++) {
		newData.push(data[i] + 1)
	}
	return newData
}

// declarative
const addOne2 = data => data.map(item => item + 1)
const addOne3 = data => R.map(item => R.add(1)(item), data)
const addOne4 = R.map(R.add(1), data)

