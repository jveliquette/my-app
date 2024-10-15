import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh'}}>
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}

export default App;
