/*
Puedo describir un bloque en particular de pruebas que queramos hacer, asi podemos mejorar la estrategia de pruebas
*/

const { cloneArray, sub, sum } = require('../javascripts/fns')

describe('Sums Operations', () => {
    test('Sum 3 + 5 = 8', () => {
        expect(sum(3, 5)).toBe(8)
    })

    //test o it son lo mismo
    it('Sum 5 + 5 = 10', () => {
        expect(sum(5, 5)).toBe(10)
    })
})

describe('Subs Operations', () => {
    test('Sub 5 - 3 = 2', () => {
        expect(sub(5, 3)).toBe(2)
    })
})
//Si escribo describe.only solo este test será ejecutado, los demas ignorados
//Si escribo describe.skip, hara todas menos esta
describe('Array Operations', () => {
    test('Copy a new Arr', () => {
        let original = [1, 2, 3]
        let final = cloneArray(original)
        expect(original).not.toBe(final)
    })
})