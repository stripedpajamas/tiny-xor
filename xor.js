function xor (values, evaluator) {
  return !!values.reduce((final, result) => final ^ evaluator(result), false)
}

module.exports = xor
