function square(num) {
  if (typeof num !== 'number') return null
  if (num === 1) return 1
  return Math.pow(num, 2)
}

module.exports = square