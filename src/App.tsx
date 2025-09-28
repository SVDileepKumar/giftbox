import React from 'react';
import './App.css';
import Header from './components/Header';
import GiftBoxes from './components/GiftBoxes';
import Inventory from './components/Inventory';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App text-gray-900">
      <Header />
      <main className="container mx-auto p-4 md:p-6 main-content-wrapper watermark relative">
        <GiftBoxes />
        <div className="page-break"></div>
        <Inventory />
      </main>
      <Footer />
    </div>
  );
};

export default App;