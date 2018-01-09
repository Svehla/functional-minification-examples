const R = require('ramda')

const data = [1, 2, 3]

// imperative
const foo1 = data => {
  let newData = []
  for (let i = 0; i<data.length; i++) {
    if (data[i] >= 2) {
      newData.push(data[i])
    }
  }
  return newData
}

// declarative
const foo2 = data => data.filter(item => item >= 2)
const foo2 = data => R.filter(item => R.gte(2)(item))(data)
const foo4 = R.filter(R.gte(2))

cj('filter')
cj(foo1(data))
cj(foo2(data))