import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n } = useTranslation();

  // Hàm xử lý khi người dùng chọn ngôn ngữ
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Chuyển ngôn ngữ dựa trên giá trị đã chọn
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Koi Deli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Trang chủ</Nav.Link>
            <Nav.Link href="#services">Dịch vụ</Nav.Link>
            <Nav.Link href="#about">Giới thiệu</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
            <Nav.Link href="#order">Tra cứu vận đơn</Nav.Link>
          </Nav>
          <Nav className="ml-auto d-flex align-items-center">
            <Form className="d-flex align-items-center">
              {/* Nút radio cho Tiếng Việt */}
              <Form.Check 
                type="radio" 
                name="language" 
                value="vi" 
                label="Tiếng Việt" 
                onChange={handleLanguageChange} 
                className="text-white mx-2" 
                defaultChecked={i18n.language === 'vi'}
              />
              {/* Nút radio cho Tiếng Nhật */}
              <Form.Check 
                type="radio" 
                name="language" 
                value="ja" 
                label="日本語" 
                onChange={handleLanguageChange} 
                className="text-white mx-2" 
                defaultChecked={i18n.language === 'ja'}
              />
            </Form>
            <Nav.Link href="#login">ĐĂNG KÍ/ ĐĂNG NHẬP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
