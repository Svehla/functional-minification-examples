const R = require('ramda')
const data1 = [1, 2, 3]
const data2 = [1, 2, 3]

// declarative
const addArrs0 = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i<arr1.length; i++) {
    result[i] = arr1[i] + arr2[i]
  }
  return result
}
// almost declarative
const addArrs1 = (arr1, arr2) => 
  arr1.map((item, index) => (
    item + arr2[index]
  ))

// ramda
const addArrs2 = (arr1, arr2) => 
  R.zipWith(
    (item1, item2) => R.add(item1, item2),
    arr1,
    arr2,
  )

// final touch
const addArrs3 = R.zipWith(R.add)

c(addArrs0(data1, data2))
c(addArrs1(data1, data2))
c(addArrs2(data1, data2))
c(addArrs3(data1, data2))

