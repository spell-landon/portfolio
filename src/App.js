// dependencies
import { Routes, Route } from 'react-router-dom';
// components
import Home from './components/Home/Home';
// individual projects
import RecipeaceProject from './components/IndProjects/RecipeaceProject/RecipeaceProject';
import JobSearchProject from './components/IndProjects/JobSearchProject/JobSearchProject';
import FlashCardProject from './components/IndProjects/FlashCardProject/FlashCardProject';

function App() {
  return (
    <>
      <Routes>
        {/* Initial Home Path */}
        <Route path='/' element={<Home />} />
        {/* Individual Projects */}
        <Route path='/recipeace' element={<RecipeaceProject />} />
        <Route path='/job-search-tracker' element={<JobSearchProject />} />
        <Route path='/flash-card' element={<FlashCardProject />} />
      </Routes>
    </>
  );
}

export default App;
