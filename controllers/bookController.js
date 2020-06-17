const { Book } = require('../models');

// set up try catch for methods
module.exports = {
  findAll: async (req, res) => {
    try {
      const books = await Book.Find();
      if (!books) {
        return res.status(200).json({ error: 'No books found' });
      }
      return res.json(books);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  findById: async (req, res) => {
    const { bookId } = req.params.id;
    console.log('findById', bookId);
    try {
      const bookSearched = await Book.findById(bookId);
      if (!bookId) {
        return res.status(401).json({ error: 'no book by that id was found' });
      }
      console.log('findbook', bookSearched);
      return res.json(bookSearched);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  create: async (req, res) => {
    const { book } = req.body;
    console.log('createthis', book);
    if (!book) {
      return res.status(403).json({ error: 'You must provide a book' });
    }
    try {
      const newBook = await new Book(book).save();
      console.log('newBookcreated', newBook);
      return res.status(200).json(newBook);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  update: async (req, res) => {
    const { bookId } = req.params.id;
    console.log('updatethisId', bookId);
    const { bookToUpdate } = req.body;
    console.log('bookToUpdate', bookToUpdate);
    try {
      const updatedBook = await Book.findOneAndUpdate(bookId, bookToUpdate);
      return res.status(200).json(updatedBook);
    } catch (e) {
      // I WAS HERE LAST!!! FIND ME!
      return res.status(403).json({ e });
    }
  },
  remove: async (req, res) => {
    const { bookId } = req.params.id;
    console.log('removeId', bookId);
    const {bookToDelete } = req.body;
    console.log('bookToRemove', bookToDelete);
    try {
      const deletedBook = await Book.findOneAndDelete(bookId, bookToDelete);
      console.log('deletedBook', deletedBook);
      return res.status(200).json(deletedBook);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
