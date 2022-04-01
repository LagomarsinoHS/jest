const { cloneArray } = require('../javascripts/fns')

test('Create a new Array', () => {
    let originalArr = [1, 2, 3]
    let cloneArr = cloneArray(originalArr)
    expect(cloneArr).not.toBe(originalArr)
})
