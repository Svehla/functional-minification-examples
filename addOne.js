const R = require('ramda')

const data = [1, 2, 3]

// imperative
const filterLte1 = data => {
	let newData = []
	for(let i = 0; i < data.length; i++) {
		if(data[i] >= 1) {
			newData.push(data[i])
		}	
	}
	return newData
}

// declarative
const filterLte2 = data => data.filter(item => item >= 1)
const filterLte3 = data => R.filter(item => R.lte(1)(item))(data)
const filterLte4 = R.filter(R.lte(1))

console.log(filterLte1(data))
console.log(filterLte2(data))
console.log(filterLte3(data))
console.log(filterLte4(data))
