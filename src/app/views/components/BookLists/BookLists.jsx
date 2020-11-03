import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import cx from "classnames";
// import ReactPaginate from "react-paginate";

import styles from "./BookLists.module.css";

// import data from "../../../data/books";

// console.log(data);

// import bookCover from "../../assets/img/afia-siddque.jpg";

const BookLists = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // async function getBooks() {
    //   try {
    //     const response = await axios.get(
    //       "https://example-data.draftbit.com/books?_page=1&_limit=10"
    //     );
    //     return response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    axios
      .get(`https://example-data.draftbit.com/books?_page=1&_limit=12`)
      .then(function(response) {
        // handle success
        setBooks(response.data);
        // console.log(books);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  // console.log(books);

  return (
    <Container className={cx(styles.bookLists, "pt-5 pb-5")}>
      <Row>
        <Col>
          <h2>Latest Books</h2>
        </Col>
      </Row>
      <Row>
        {books.map(item => {
          return (
            <CardInfo
              cover={item.image_url}
              title={item.title}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

const CardInfo = ({ cover, title, id }) => {
  return (
    <Col lg={3}>
      <Card className={styles.card}>
        <Card.Img variant="top" src={cover} />
        <Card.Body>
          <Card.Title>
            <Link to={`/book/${id}`}>{title}</Link>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button size="lg" block>
            Request this book
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default BookLists;
