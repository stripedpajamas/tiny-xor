const assert = require('assert')
const xor = require('./xor')

function test () {
  function evaluator (a) {
    return a < 10
  }

  // GOAL:
  //  return true if (a && !b) || (!a && b)
  assert.strictEqual(xor([1, 2], evaluator), false)
  assert.strictEqual(xor([1, 12], evaluator), true)
  assert.strictEqual(xor([12, 1], evaluator), true)
  assert.strictEqual(xor([12, 12], evaluator), false)
}

test()
console.log('Tests pass')
