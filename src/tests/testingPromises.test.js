const { calculateSquare } =require('../javascripts/fns')


describe('Calculate Square', () => {

    test('input 3 should return 9', () => {
        return calculateSquare(3).then(res => {
            expect(res).toBe(9)
        })
    })

    test('input 3 should return 9 with RESOLVES syntax', () => {
        return expect(calculateSquare(3)).resolves.toBe(9)
    })


    test('invalid input should return a message', () => {
        return calculateSquare('invalid').catch(err => {
            expect(err).toBe('Argument must be a number')
        })
    })

    test('invalid input should return a message with REJECTS syntax', () => {
        return expect(calculateSquare('invalid')).rejects.toBe('Argument must be a number')
    })

})
