const { sum } = require('../javascripts/fns')

test('Properly adds 2 numbers', () => {
    expect(sum(3, 5)).toBe(8)
})
