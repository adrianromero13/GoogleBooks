const axios = require('axios');
const { Book } = require('../models');

module.exports = {
  // findAll: async (req, res ) => {
  //   const {query: params} = req;
  //   try {
  //     const { data } = await axios.get("https://www.googleapis.com/books/v1/volumes", { params });
  //     return res.status(200).json(data);
  //   } catch (e) {
  //   }
  // }
    findAll: function(req, res) {
      const { query: params } = req;
      axios
        .get("https://www.googleapis.com/books/v1/volumes", {
          params
        })
        .then(results =>
          results.data.items.filter(
            result =>
              result.volumeInfo.title &&
              result.volumeInfo.infoLink &&
              result.volumeInfo.authors &&
              result.volumeInfo.description &&
              result.volumeInfo.imageLinks &&
              result.volumeInfo.imageLinks.thumbnail
          )
        )
        .then(apiBooks =>
          Book.find().then(dbBooks =>
            apiBooks.filter(apiBook =>
              dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            )
          )
        )
        .then(books => res.json(books))
        .catch(err => res.status(422).json(err));
    }
  };
