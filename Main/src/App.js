import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path=".views/home" element={<Home />} />
          <Route path="./views/about" element={<About />} />
          <Route path=".views/projects" element={<Projects />} />
          <Route path=".views/resume" element={<Resume />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
