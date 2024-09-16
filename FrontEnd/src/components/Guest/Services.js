import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const services = [
    { title: "Chuyển phát nhanh", description: "Dịch vụ chuyển phát nhanh toàn quốc." },
    { title: "Chuyển phát quốc tế", description: "Dịch vụ vận chuyển quốc tế an toàn." },
    { title: "Giao hàng tiết kiệm", description: "Dịch vụ chuyển phát tối ưu phí dịch vụ." },

  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Dịch vụ của chúng tôi</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
