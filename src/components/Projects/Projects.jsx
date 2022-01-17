import React from 'react';
import styles from './Projects.module.css';
import projectData from '../../data.json';
// Link
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects(props) {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.mainContainer}>
        <h1>Projects</h1>
        <div className={styles.gallery}>
          {projectData.map((element, index) => {
            return (
              <Link to={`/${element.name}`} key={index}>
                <ProjectCard data={element} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
