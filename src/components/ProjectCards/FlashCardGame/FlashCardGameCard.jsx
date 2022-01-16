import React from 'react';
import styles from './FlashCardGameCard.module.css'

function FlashCardGameCard(props) {
    return (
      <div className={styles.cardContainer}>
        <h1>Flash Card Game</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          mollitia commodi harum. Facere, itaque corrupti? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Neque obcaecati ex sint id.
          Reprehenderit, aliquam?
        </p>
      </div>
    );
}

export default FlashCardGameCard;