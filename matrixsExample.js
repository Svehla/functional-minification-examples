const R = require('ramda')


const someFormula = (num1,num2) => (num1 + num2) / 2

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const matrix2 = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
]

// 0. student imperative
function decAppToMat(mat1, mat2){
  let resultMatrix = []
  for(let i = 0; i < matrix1.length; i++) {
    resultMatrix[i] = []
    for(let j = 0; j < matrix2.length; j++) {
      resultMatrix[i][j] = (matrix1[i][j] + matrix2[i][j]) / 2
    }
  }
  return resultMatrix
}

// 1. imperative
function applyFnToMatrixs1(fn, mat1, mat2){
  let resultMatrix = []
  for(let i = 0; i < matrix1.length; i++) {
    resultMatrix[i] = []
    for(let j = 0; j < matrix2.length; j++) {
      resultMatrix[i][j] = fn(matrix1[i][j], matrix2[i][j])
    }
  }
  return resultMatrix
}


// 2. ES6 functional
const applyFnToMatrixs2 = (fn, mat1, mat2) => (
  matrix1.map((row, i) =>
    row.map((cell, j) =>
      someFormula(cell, matrix2[i][j])
    )
  )
)



// 3. ramda code
const applyFnToMatrixs3 = (fn, mat1, mat2) => (
  R.zipWith((row1, row2) => (
    R.zipWith((cell1, cell2) => (
      fn(cell1, cell2)
    ), row1, row2)
  ),
  mat1,
  mat2
))


// 4. ramda minify code
const applyFnToMatrixs4 = (fn, mat1, mat2) => 
  R.zipWith(R.zipWith(fn))(mat1, mat2)

// 5 ramda minify code
const applyFnToMatrixs4 = (fn, mat1, mat2) => 
  R.compose(R.zipWith, R.zipWith)(fn)(mat1, mat2)

// 6. ramda minify hipster
const applyFnToMatrixs5 = R.compose(R.zipWith, R.zipWith)
  

const resultMatrix1 = applyFnToMatrixs1(someFormula, matrix1, matrix2)
c({ resultMatrix1 })
const resultMatrix2 = applyFnToMatrixs2(someFormula, matrix1, matrix2)
c({ resultMatrix2 })
const resultMatrix3 = applyFnToMatrixs3(someFormula, matrix1, matrix2)
c({ resultMatrix3 })
// const applyCustomToMatrixs = applyFnToMatrixs4(someFormula)
const resultMatrix4 = applyFnToMatrixs4(someFormula, matrix2, matrix1)
c({ resultMatrix4 })


// add hipster formula via Ramda.js
const hipsFormula = R.unapply(R.mean)
const resultMatrix5 = applyFnToMatrixs5(hipsFormula)(matrix2, matrix1)
c({ resultMatrix5 })
