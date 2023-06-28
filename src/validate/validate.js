function validate(num) {
  if (num === 0 || (num > 100 && num < 1000)) return true
  return false
}

module.exports = validate
