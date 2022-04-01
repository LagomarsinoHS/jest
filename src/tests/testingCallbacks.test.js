const { calculateSquareCallback } = require('../javascripts/fns')


describe('Calculate Square with CALLBACK', () => {

    test('input 3 should return 9', (done) => {
        calculateSquareCallback(3, (error, data) => {
            expect(data).toBe(9)
            done()
        })
    })


    test('invalid input should return a message', (done) => {
        calculateSquareCallback('invalid', (err, data) => {
            expect(err).toBe('Argument must be a number')
            done();
        })
    })
})