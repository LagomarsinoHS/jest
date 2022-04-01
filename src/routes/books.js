const express = require('express');
const router = express.Router();
const BOOKS = require('../models/books')


router.get('/', (req, res, next) => {
  res.json(BOOKS)
});


router.post('/', (req, res) => {
  console.log(req.body);
  const { isbn, title, author, publishDate, numOfPages } = req.body

  if (!isbn || !title) res.status(400).json({ msg: 'Faltan datos' })
  BOOKS.push(req.body)
  res.status(201).send({ msg: 'Libro creado exitosamente' })
});

router.put('/:id', (req, res) => {
  const theBook = BOOKS.findIndex(book => book.isbn == req.params.id)
  console.log(">>".theBook);
  if (!theBook) res.status(404)
  BOOKS[theBook] = req.body
  res.send({ msg: 'Actualizado' })
})

router.delete('/:id', (req, res) => {
  const theBook = BOOKS.findIndex(book => book.isbn == req.params.id)
  if (!theBook) res.status(404)
  BOOKS.splice(theBook, 1)
  res.send({ msg: 'Eliminado' })
})

module.exports = router;
