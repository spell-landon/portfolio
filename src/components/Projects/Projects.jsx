import React from 'react';
import styles from './Projects.module.css';
import projectData from '../../data.json';
// Project cards
import RecipeaceCard from '../ProjectCards/Recipeace/RecipeaceCard';
import JobSearchTrackerCard from '../ProjectCards/JobSearchTracker/JobSearchTrackerCard';
import FlashCardGameCard from '../ProjectCards/FlashCardGame/FlashCardGameCard';
// Link
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects(props) {
  console.log(projectData);
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.mainContainer}>
        <h1>Projects</h1>
        <div className={styles.gallery}>
          {/* <Link to='/recipeace'>
            <RecipeaceCard />
          </Link>
          <Link to='/job-search-tracker'>
            <JobSearchTrackerCard />
          </Link>
          <Link to='/flash-card'>
            <FlashCardGameCard />
          </Link> */}
          {projectData.map((element, index) => {
            return (
              <Link to={`/${element.name}`}>
                <ProjectCard key={index} data={element} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
