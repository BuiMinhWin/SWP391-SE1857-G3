import { useState } from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  // Tạo trạng thái để lưu trữ thông tin đăng nhập
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Giả sử bạn có một hàm để kiểm tra đăng nhập, đây là cách đơn giản:
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
         
          <Route path='/login' element={<LoginComponent handleLogin={handleLogin} />} />
          
          <Route path='/' element={isAuthenticated ? <ListEmployeeComponent /> : <Navigate to='/login' />} />
          <Route path='/employees' element={isAuthenticated ? <ListEmployeeComponent /> : <Navigate to='/login' />} />
          <Route path='/add-employee' element={isAuthenticated ? <EmployeeComponent /> : <Navigate to='/login' />} />
          <Route path='/edit-employee/:id' element={isAuthenticated ? <EmployeeComponent /> : <Navigate to='/login' />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
