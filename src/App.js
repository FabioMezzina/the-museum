import './App.css';
import React from 'react';

import Header from './Layout/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
