
import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Define your repository name once
const REPO_NAME = "/judo-school/"; // Must match the base in vite.config.js

const App = () => {
  return (
    <BrowserRouter basename={REPO_NAME}>
      <div className="min-h-screen flex flex-col pt-20"> {/* pt-20 to offset the fixed Navbar height */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future pages will go here: */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/store" element={<StorePage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;