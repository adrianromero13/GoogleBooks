const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// routes
app.use(routes);

// database

// server

app.listen(PORT, () =>
  console.log(`API server now listening on Port ${PORT}!`)
);
