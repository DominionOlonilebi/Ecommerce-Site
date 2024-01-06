import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
<Container fluid className='newsletter'>
    <Container>
        <Row>
        <Col md={6}>
        <h4><b>Join Our Newsletter</b></h4>
        <p>Dapibus Cras jus Dapibus Cras justo isisto odio facilisis</p>
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
          <a href='/prod'>Search</a>
        </Button>
      </InputGroup>
      </Form>
        </Col>
        </Row>
    </Container>
</Container>



        <Container fluid className='footers'>
      <Container>
        <Row>
            <Col md={3}>
            <h5><b>Help & Contact</b></h5>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus facilisis</p>
            <p>Dapibus facilisis</p>
            </Col>
            <Col md={3}>
            <h5><b>Product Info</b></h5>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus facilisis</p>
            <p>Dapibus facilisis</p>
            </Col>
            <Col md={3}>
            <h5><b>Payment Info</b></h5>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus facilisis</p>
            <p>Dapibus facilisis</p>
            </Col>
            <Col md={3}>
            <h5><b>About Us</b></h5>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus ac facilisis</p>
            <p>Dapibus facilisis</p>
            <p>Dapibus facilisis</p>
            </Col>
        </Row>
      </Container>
      <h6>&copy; Copyright 2024 <strong>Super<span>.Mall</span></strong>. Made with &hearts; by Dominion</h6>
      <p>All Rights Reserved</p>
      </Container>
    </div>
  )
}

export default Footer
