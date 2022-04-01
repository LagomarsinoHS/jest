const request = require('supertest')
const app = require('../app.js')
const BOOKS = require('../models/books')

describe('Testing APIs', () => {

    describe('Get Api', () => {
        test('Should return 200', async () => {
            const response = await request(app)
                .get('/books')
                .expect(200)

            const result = response.body
            expect(result).toHaveLength(2);
            expect(result[0]).toStrictEqual(BOOKS[0])
            expect(result[1]).toStrictEqual(BOOKS[1])
        })
    })

    describe('Post Api', () => {
        test('Should Return 400', async () => {
            const response = await request(app)
                .post('/books')
                .expect(400)

            expect(response.body.msg).toBe('Faltan datos')
        })

        test('Should Return 200', async () => {
            const response = await request(app)
                .post('/books')
                .send({
                    isbn: '343434',
                    title: 'Wimpoy Kid'
                })
                .expect(201)

            expect(response.body.msg).toBe('Libro creado exitosamente')
        })
    })

    describe('Put Api', () => {
        test('Should Return 200', async () => {
            const response = await request(app)
                .put('/books/000101010')
                .send({
                    author: 'new Author',
                    title: 'wiwiw'
                })
                .expect(200)

            expect(response.body.msg).toBe('Actualizado')
        })

        test('Should Return 400', async () => {
            await request(app)
                .post('/books/516551')
                .expect(404)
        })
    })
})