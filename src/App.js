// dependencies
import { Routes, Route } from 'react-router-dom';
// components
import Home from './components/Home/Home';
// individual projects
import IndProject from './IndProject/IndProject';
import { useState } from 'react';
import projectData from './data.json';

function App() {
  const [data, setData] = useState();
  return (
    <>
      <Routes>
        {/* Initial Home Path */}
        <Route path='/' element={<Home />} />
        {/* Individual Project Path */}
        <Route
          path='/:name'
          element={<IndProject data={data} setData={setData} />}
        />
      </Routes>
    </>
  );
}

export default App;
