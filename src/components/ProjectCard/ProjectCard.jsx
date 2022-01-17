import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ data }) {
  return (
    <div className={styles.cardContainer}>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default ProjectCard;
