const R = require('ramda')

// knihovna vracela nestabilní data
const areDiffInArrays = R.pipe(R.symmetricDifference, R.isEmpty, R.not)