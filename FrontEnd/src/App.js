import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Guest/Header';
import Banner from './components/Guest/Banner';
import Services from './components/Guest/Services';
import Footer from './components/Guest/Footer';

function App() {
  const { i18n } = useTranslation();

  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
