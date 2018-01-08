
fn (x: number) => fn (y: number) => number


function x2y2(x){
	return function y2(y){
		return x ** 2 + y ** 2
	}
}
console.log(x2y2)

function x2y2(x){
	return function y2(y){
		return x ** 2 + y ** 2
	}
}
console.log(x2y2(3))

function x2y2(x){
	return function y2(y){
		return x ** 2 + y ** 2
	}
}

const x2y2 = (x, y) => x ** 2 + y ** 2 // 32 chars
const x2y2 = x => y => x ** 2 + y ** 2 // 32 chars

////////////////////
const add = x => y => x + y
add(2)(5) // -> 7

const substract = x => y => x - y
add(2)(5) // -> -3

const map = fn => arr => arr.map(fn)
map(number => number + 1)([1, 2, 3])

const add = x => y => x + y
const map = fn => arr => arr.map(fn)

map(number => add(1)(number), [1,2,3])
map(add(1), [1,2,3])

import * as R from 'ramda'

const add = R.curry((x, y) => x + y)
add(2, 5) // -> 7
add(2)(5) // -> 7

R.map(number => R.add(1, number), [1, 2, 3])
R.map(R.add(1), [1, 2, 3])
// -> [2, 3, 4]





R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); 
//=> {a: {b: {c: 42}}}

R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}});
//=> {a: {b: {}}}

R.equals([1, 2, 3], [1, 2, 3]); 
//=> true

const a = [1, 2, 3]
R.clone(a) === a // false