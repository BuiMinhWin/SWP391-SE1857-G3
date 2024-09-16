import React from 'react';
import { Container } from 'react-bootstrap'; 

function Banner() {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1>Chào mừng đến Koi Deli</h1>
        <p>
          Chúng tôi cung cấp dịch vụ giao hàng nhanh chóng và tin cậy nhất!
        </p>
      </Container>
    </div>
  );
}

export default Banner;
