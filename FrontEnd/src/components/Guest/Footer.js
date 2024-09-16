import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Koi Deli</h5>
            <p>Công ty vận chuyển hàng đầu Việt Nam</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>&copy; 2024 Koi Deli. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
