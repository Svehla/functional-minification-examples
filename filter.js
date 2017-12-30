const R = require('ramda')

const data = [1, 2, 3]

// imperative
const foo1 = data => {
	let newData = []
	let addVal;
	for (let i = 0; i<data.length; i++) {
		addVal = data[i] + 1
		if (addVal <= 2) {
			newData.push(addVal)
		}
	}
	return newData
}

// declarative
const foo2 = R.compose(
	R.filter(R.gte(2)),
	R.map(R.add(1)),
)

cj('filter')
cj(foo1(data))
cj(foo2(data))