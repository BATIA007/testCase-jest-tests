const delay = require('./delay')

describe('Delay', () => {
  test('delay test', async () => {
    const fn = await delay((a, b) => a * b, 1000)
    expect(fn(2, 5)).toBe(10)
    expect(fn(3, 5)).toBe(15)
    expect(fn(5, 5)).toBe(25)
  });
});