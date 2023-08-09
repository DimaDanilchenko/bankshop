import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SortBanknots from './SortBanknots';
import { Routes, Route } from 'react-router-dom';
import OfficeTexnika from './OfficeTexnik';
import AboutCompany from './AboutCompany';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/sortirovka-banknot" element={<SortBanknots />} />
        <Route path="/office-texnika" element={<OfficeTexnika />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
