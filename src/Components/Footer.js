import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="newsletter">
        <Container>
          <Row>
            <Col md={6}>
              <h4>
                <b>Join Our Newsletter</b>
              </h4>
              <p>Dapibus Cras jus Dapibus Cras justo isisto odio</p>
            </Col>
            <Col md={6}>
              <Form>
                <InputGroup className="formss">
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
          </Row>
        </Container>
      </Container>

      <Container fluid className="footers">
        <Container>
          <Row>
            <div className="col-md-3 col-6">
              <h6>
                <b>Help & Contact</b>
              </h6>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus facilisis</p>
            </div>
            <div className="col-md-3 col-6">
              <h6>
                <b>Product Info</b>
              </h6>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus facilisis</p>
            </div>
            <div className="col-md-3 col-6">
              <h6>
                <b>Payment Info</b>
              </h6>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus facilisis</p>
            </div>
            <div className="col-md-3 col-6">
              <h6>
                <b>About Us</b>
              </h6>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus ac facilisis</p>
              <p>Dapibus facilisis</p>
            </div>
          </Row>
        </Container>
        <h6 className="footers_text">
          &copy; Copyright 2024{" "}
          <strong>
            Super<span>.Mall</span>
          </strong>
          . Made with &hearts; by Dominion
        </h6>
        <p>All Rights Reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
