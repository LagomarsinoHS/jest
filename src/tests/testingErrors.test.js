const { squareForErrorTesting } =require('../javascripts/fns')


describe('Calculate Square with and w/o errors', () => {

    test('Valid input', () => {
        expect(squareForErrorTesting(2)).toBe(4)
    })

    test('invalid input', () => {
        expect(() => squareForErrorTesting('as')).toThrow('number argument expected')
    })
})
