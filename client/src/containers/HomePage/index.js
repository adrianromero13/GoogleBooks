import React, { Component } from 'react';

import { Col, Row, Container } from '../../components/Wrappers/Layout';
import { List } from '../../components/Wrappers/List';
import Jumbotron from '../../components/Wrappers/Jumbotron';
import ContentBox from '../../components/BookContent';
import SearchForm from '../../components/SearchForm';
import BookContent from '../../components/BookContent';
import Footer from '../../components/Footer';
import API from '../../utils';

class HomePage extends Component {
  state = {
    books: [],
    q: '',
    message: 'Search Book Titles =] '
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: 'No books found, try a searching something different'
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books
      .find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    console.log('HomePage State', this.state);
    return (
      <Container>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1 className='text-center'>
                <strong>Application: Google Books Search</strong>
              </h1>
              <h2 className='text-center'>Search for Books and Save Your Favorites</h2>
            </Jumbotron>
          </Col>
          <Col size='md-12'>
            <ContentBox title='Book Search' icon='far fa-book'>
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </ContentBox>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
            <ContentBox title='results'>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <BookContent
                      Key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(', ')}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          classNamee='btn btn-primary ml-2'
                          content='Save'
                        />
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className='text-center'>{this.state.message}</h2>
                )}
            </ContentBox>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default HomePage;
