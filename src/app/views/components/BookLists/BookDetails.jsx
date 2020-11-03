import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { withRouter } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import cx from "classnames";
import styles from "./BookLists.module.css";

const BookDetails = ({ match }) => {
  const [book, setBook] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then(function(response) {
        // handle success
        setBook(response.data);
        // console.log(books);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [id]);
  console.log(id);
  return (
    <>
      <Container className={cx(styles.bookLists, "pt-5 pb-5")}>
        <Row>
          <Col lg={6}>
            <Card className={styles.card}>
              <Card.Img variant="top" src={book.image_url} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.authors} </Card.Text>
                <p>{book.description}</p>
              </Card.Body>
              <Card.Footer>
                <Button size="lg" block>
                  Request this book
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookDetails;
