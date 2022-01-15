import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { gsap } from 'gsap'

function App() {
  return (
    <>
      <HashRouter>
        <Home />
      </HashRouter>
    </>
  );
}

export default App;
