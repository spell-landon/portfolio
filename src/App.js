import Home from './components/Home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import RecipeaceProject from './components/IndProjects/RecipeaceProject/RecipeaceProject';
import JobSearchProject from './components/IndProjects/JobSearchProject/JobSearchProject';
import FlashCardProject from './components/IndProjects/FlashCardProject/FlashCardProject';

function App() {
  return (
    <>
      {/* <HashRouter> */}
      {/* <Home /> */}
      {/* </HashRouter> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipeace' element={<RecipeaceProject />} />
        <Route path='/job-search-tracker' element={<JobSearchProject />} />
        <Route path='/flash-card' element={<FlashCardProject />} />
      </Routes>
    </>
  );
}

export default App;
