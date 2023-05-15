import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CursorTrail from './components/CursorTrail';
import './App.css';

const App = ({url}) => {
  const [{ themeName }] = useContext(ThemeContext);
  CursorTrail(url)

  return (
    <div id="top" className={`${themeName} app`}>
      <canvas id="canvas"/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop />
        <Footer className={themeName} />
      </Router>
    </div>
  );
};

export default App;
