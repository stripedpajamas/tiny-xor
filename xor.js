function xor (values, evaluator) {
  return !!values
    .map(evaluator)
    .reduce((final, result) => final ^ result)
}

module.exports = xor
