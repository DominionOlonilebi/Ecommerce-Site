import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <Container className='form_container' >
      <h1><b>Contact <span>Us</span></b></h1>
      <p className='contact'><b>Dial:</b> +23467983412 &nbsp;&nbsp; <b>Email:</b> supermall@gmail.com</p>
        <Row className='form_row'>
            <p className='mt-4'>Fill the form below to get a customer ID number</p>
            <Col md={4}>
            <Form>
                <input type='text' className='form-control mb-4' placeholder='Name' required/>
                <input type='email' className='form-control mb-4'placeholder='Email' required/>
                <input type='tel' className='form-control mb-4' placeholder='Phone No' required/>
                <input type='password' className='form-control mb-4' placeholder='Create Password' required/>
                <input type='password' className='form-control mb-4' placeholder='Confirm Password' required/>
<Button type='submit' className='submit_button mb-4'>Submit</Button>
            </Form>
            </Col>
            <Col md={8}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1704263350864!5m2!1sen!2sng" width={730} height={450} style= {{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
