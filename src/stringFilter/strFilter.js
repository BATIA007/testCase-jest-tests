function stringFilter(arr) {
  return arr.length ? arr.filter(item => typeof item === 'string' ? true : false) : null
}

module.exports = stringFilter