import React from 'react';
import styles from './RecipeaceCard.module.css';

function RecipeaceCard(props) {
  return (
    <div className={styles.cardContainer}>
      <h1>Recipeace</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        mollitia commodi harum. Facere, itaque corrupti? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Neque obcaecati ex sint id.
        Reprehenderit, aliquam?
      </p>
    </div>
  );
}

export default RecipeaceCard;
