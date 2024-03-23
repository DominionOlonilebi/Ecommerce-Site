import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <Container className="product">
        <Row className="mt-4 mb-3">
          <h2 className="mb-4">
            <strong>Trending Products</strong>
          </h2>
          <div className="col-md-2 col-6">
            <img src="Images/shoe7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>White & Red Sneaker</h5>
            <p className="price">$600.00</p>
            <p className="number">5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe5.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>Black & White Sneaker</h5>
            <p className="price">$600.00</p>
            <p>5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>White & Red Sneaker</h5>
            <p className="price">$600.00</p>
            <p>5 pairs left out</p>
          </div>
        </Row>

        <Row className="mb-3">
          <div className="col-md-2 col-6">
            <img src="Images/shoe5.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>Black & White Sneaker</h5>
            <p className="price">$300.00</p>
            <p>5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>White & Red Sneaker</h5>
            <p className="price">$650.00</p>
            <p>5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe5.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>Black & White Sneaker</h5>
            <p className="price">$300.00</p>
            <p>5 pairs left out</p>
          </div>
        </Row>

        <Row className="mb-5">
          <div className="col-md-2 col-6">
            <img src="Images/shoe7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>White & Red Sneaker</h5>
            <p className="price">$650.00</p>
            <p>5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe5.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>Black & White Sneakers</h5>
            <p className="price">$300.00</p>
            <p>5 pairs left out</p>
          </div>
          <div className="col-md-2 col-6">
            <img src="Images/shoe7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-2 col-6">
            <h5>White & Red Sneaker</h5>
            <p className="price">$650.00</p>
            <p>5 pairs left out</p>
          </div>
        </Row>
      </Container>

      <Container className="limited_product">
        <Row>
          <Col md={3} sm={12}>
            <Card>
              <h5 className="pt-2">
                <b>
                  Premier Products <span>Offer Ends At</span>
                </b>
                <span>
                  {" "}
                  <b>2 </b> <b>: </b> <b>10 </b> <b>57</b>
                </span>
              </h5>
              <img src="Images/shoe3.jpg" className="img-fluid" />
              <CardBody>
                <h6>
                  <b>Beauty Shoes with The Charming Look</b>
                </h6>
                <h5 className="text-danger">
                  <strong>$350.00</strong>
                </h5>
              </CardBody>
              <CardFooter>9 pieces left</CardFooter>
            </Card>
          </Col>
          <Col md={9} sm={12}>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum nisi quis eleifend quam adipiscing vitae. Phasellus
                egestas tellus rutrum tellus pellentesque eu tincidunt. Eu
                tincidunt tortor aliquam nulla facilisi cras. Tellus elementum
                sagittis vitae et. Rhoncus urna neque viverra justo nec
                ultrices.
              </li>{" "}
              <li>
                Lacus luctus accumsan tortor posuere. Mattis enim ut tellus
                elementum sagittis vitae et leo duis. Praesent tristique magna
                sit amet purus gravida quis blandit. Interdum posuere lorem
                ipsum dolor sit. Consequat semper viverra nam libero justo
                laoreet sit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quisque egestas diam in arcu cursus euismod quis.
              </li>{" "}
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit duis
                tristique. In ornare quam viverra orci sagittis eu volutpat odio
                facilisis. Ante in nibh mauris cursus mattis molestie a iaculis.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
