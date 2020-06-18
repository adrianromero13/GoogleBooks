import React, { Component } from 'react';

import { Col, Row, Container } from '../../components/Wrappers/Layout';
import { List } from '../../components/Wrappers/List';
import Jumbotron from '../../components/Wrappers/Jumbotron';
import ContentBox from '../../components/Wrappers/ContentBox';
import BookContent from '../../components/BookContent';
import Footer from '../../components/Footer';

import API from '../../utils';

import '../../assets/styles.css'

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1 className='text-center customText'>
                <strong>Saved Books</strong>
              </h1>
              <h3 className='text-center'>Look Through Your Saved Books</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
            <ContentBox title='Saved Books' icon='download'>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <BookContent
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(', ')}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className='btn btn-danger ml-2'
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className='text-center'>Go Back And Save Some Books</h2>
              )}
            </ContentBox>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default SavedBooks;
