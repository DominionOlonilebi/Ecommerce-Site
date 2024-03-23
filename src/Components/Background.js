import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FigureCaption,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";

const Background = () => {
  return (
    <div>
      <Container fluid className="forms">
        <Col md={3} sm={12}>
          <Form>
            <InputGroup className="formss py-2">
              <Form.Control
                placeholder="Search for Products"
                aria-label="Search for Products"
                aria-describedby="basic-addon2"
              />
              <Button variant="btn btn-danger" id="button-addon2">
                <a href="/prod">Search</a>
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Container>
      <section>
        <Container className="mt-2">
          <Row className="category d-flex justify-content-center">
            <Col md={3}>
              <Card className="cards" style={{ width: "20rem" }}>
                <Card.Header className="category_header py-1 text-white">
                  <a href="/prod">Product Categories</a>{" "}
                </Card.Header>
                <ListGroup>
                  <ListGroup.Item>
                    <a href="/prod">High Heels</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/prod">Block Heels</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/prod">Red-Colored Sneakers</a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/prod">Blue-Colored Sneakers</a>
                  </ListGroup.Item>
                  <ListGroup.Item href="/">
                    <a href="/prod">Multi-Colored Sneaker</a>
                  </ListGroup.Item>
                  <ListGroup.Item href="/">
                    <a href="/prod">Black-Colored Sneakers</a>
                  </ListGroup.Item>
                  <ListGroup.Item href="/">
                    <a href="/prod">White-Colored Sneakers</a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col md={8} className="px-5 get">
              <h1>It's Yours... Grab it Now!</h1>
              <h2>BRAND NEW SHOES</h2>
              <h5>
                <i>Original Italian wears</i>
              </h5>
              <Button className="btn">
                <a href="/prod">Shop Now</a>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Background;
