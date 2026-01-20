import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Rankings from './pages/Rankings';
import Gallery from './pages/Gallery';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'about' && <About />}
      {currentPage === 'gallery' && <Gallery />}
      {currentPage === 'rankings' && <Rankings />}

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2026 UWO Poker Club. All rights reserved.</p>
          <p className="footer-subtext">Part of the Western University Student Council</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
