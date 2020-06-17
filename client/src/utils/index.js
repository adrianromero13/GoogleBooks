import axios from 'axios';
//set up axios calls for the controllers

export default {
    // books api calls
    getSavedBooks: function() {
        return axios.get('/api/books');
    },
    //saving books
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData);
    },
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id);
    },
};
