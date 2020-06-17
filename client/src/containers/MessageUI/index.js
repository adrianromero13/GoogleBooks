import React from 'react';
import { Col, Row, Container } from '../../components/Wrappers/Layout';
import Jumbotron from '../../components/Wrappers/Jumbotron';

function MessageUI() {
  return (
    <Container fluid>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1 className='text-center'>404 Page Not Found</h1>
            <h1 className='texct-center'>
              <i className='fab fa-readme' />
              <p>refresh and try a different search</p>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default MessageUI;
