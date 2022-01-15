import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects(props) {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.gallery}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
