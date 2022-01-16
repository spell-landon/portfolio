import Home from './components/Home/Home';
import { HashRouter } from 'react-router-dom';

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
