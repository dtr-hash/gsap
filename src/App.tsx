import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/UI/Nav';
import HeaderSection from './components/HeaderSection';
import CircleSection from './components/CircleSection';
import SquareSection from './components/SquareSection';
import RectSection from './components/RectSection';
import Home from './views/Home';
import Showcase from './views/Showcase';
import Contact from './views/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <HeaderSection />
            <CircleSection />
            <SquareSection />
            <RectSection />
          </>
        } />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
