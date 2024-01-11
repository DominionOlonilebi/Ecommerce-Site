import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row } from 'react-bootstrap'

const Products = () => {
  return (
    <div>
      <Container className='product'>
        <Row className='mt-5 mb-3'>
            <h1 className='mb-5'><strong>Trending Products</strong></h1>
            <Col md={2} sm={12}>
            <img src='Images/shoe7.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>White & Red Sneaker</h5>
            <p className='price'>$600.00</p>
            <p className='number'>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe5.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>Black & White Sneaker</h5>
            <p className='price'>$600.00</p>
            <p>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe7.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>White & Red Sneaker</h5>
            <p className='price'>$600.00</p>
            <p>5 pairs left out</p>
            </Col>
            </Row>

<Row className='mb-3'>
            <Col md={2} sm={12}>
            <img src='Images/shoe5.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>Black & White Sneaker</h5>
            <p className='price'>$300.00</p>
            <p>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe7.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>White & Red Sneaker</h5>
            <p className='price'>$650.00</p>
            <p>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe5.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>Black & White Sneaker</h5>
            <p className='price'>$300.00</p>
            <p>5 pairs left out</p>
            </Col>
</Row>

<Row className='mb-5'>
            <Col md={2} sm={12}>
            <img src='Images/shoe7.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>White & Red Sneaker</h5>
            <p className='price'>$650.00</p>
            <p>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe5.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>Black & White Sneakers</h5>
            <p className='price'>$300.00</p>
            <p>5 pairs left out</p>
            </Col>
            <Col md={2} sm={12}>
            <img src='Images/shoe7.jpg' className='img-fluid' alt=''/>
            </Col>
            <Col md={2} sm={12}>
            <h5>White & Red Sneaker</h5>
            <p className='price'>$650.00</p>
            <p>5 pairs left out</p>
            </Col>
        </Row>
      </Container>

      <Container className='limited_product'>
        <Row>
      <Col md={4} sm={12}>
            <Card>
                <CardHeader className='pt-4'><b>Premier Products <span>Offer Ends  At</span></b>
                <span> <b>2 </b> <b>: </b> <b>10 </b> <b>57</b></span>
                </CardHeader>
                    <CardImg src='Images/shoe3.jpg' className='img-fluid'></CardImg>
                        <CardBody>
                            <h4><b>Beauty Shoes with The Charming Look</b></h4>
                            <h4 className='text-danger'><strong>$350.00</strong></h4>
                        </CardBody>
                        <CardFooter>
9 pieces left
</CardFooter>
            </Card>
            </Col>
            <Col md={8} sm={12}>
              <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus elementum sagittis vitae et. Rhoncus urna neque viverra justo nec ultrices.</li> <li>Lacus luctus accumsan tortor posuere. Mattis enim ut tellus elementum sagittis vitae et leo duis. Praesent tristique magna sit amet purus gravida quis blandit. Interdum posuere lorem ipsum dolor sit. Consequat semper viverra nam libero justo laoreet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis.</li> <li>Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ante in nibh mauris cursus mattis molestie a iaculis. Magna sit amet purus gravida quis blandit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Integer malesuada nunc vel risus commodo viverra. Sed elementum tempus egestas sed sed. Neque laoreet suspendisse interdum consectetur libero id. Amet cursus sit amet dictum amet justo.</li>
            </ul>
            </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Products
