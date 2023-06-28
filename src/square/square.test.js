const square = require('./square')

describe('Square', () => {
  let mockValue;
  beforeAll(() => {

  })

  beforeEach(() => {

  })

  test('Tests square', () => {
    expect(square(10)).toBeLessThan(101)
    expect(square(2)).toBeLessThanOrEqual(4)
    expect(square(3)).toBeGreaterThan(8)
    expect(square(5)).not.toBeNaN()
    expect(square('2')).toBeNull()
  });

  test('Called Math.pow()', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    square(3)
    expect(spyMathPow).toBeCalledTimes(2)
  })

  test('Not Called Math.pow()', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    jest.clearAllMocks()

  })

  afterAll(() => {

  })
});