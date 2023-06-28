const validate = require('./validate')

test('Validation solo test', () => {
  expect(validate(150)).toBe(true)
})

describe('Validation block', () => {
  test('Average', () => {
    expect(validate(150)).toBe(true)
  })
  test('Less', () => {
    expect(validate(100)).toBe(false)
  })

  test('More', () => {
    expect(validate(1000)).toBe(false)
  })

  test('Zero', () => {
    expect(validate(0)).toBe(true)
  })

  test('lower limit', () => {
    expect(validate(101)).toBe(true)
  })

  test('upper limit', () => {
    expect(validate(999)).toBe(true)
  })

})