import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';


function IndProject({ data, setData }) {
  const { name } = useParams();
  console.log(data);
  return (
    <div>
      <h1>I am the {name} project</h1>
      {/* <p>{data.description}</p> */}
    </div>
  );
}

export default IndProject;
