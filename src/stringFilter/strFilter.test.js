const strFilter = require('./strFilter')

describe('String Filter', () => {
  test('Default', () => {
    expect(strFilter(['1', '2', '3'])).toEqual(['1', '2', '3'])
  })

  test('str + any', () => {
    expect(strFilter(['1', 2, null, undefined, { admin: true }, [], {}])).toEqual(['1'])
  });

  test('empty', () => {
    expect(strFilter([])).toEqual(null)
  });

  test('not to', () => {
    expect(strFilter([1, '2', '3'])).not.toEqual(['1', '2', '3'])
  })
})