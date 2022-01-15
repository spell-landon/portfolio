import React from 'react';
import styles from './About.module.css';

function About(props) {
  return (
    <div className={styles.aboutContainer}>
      <h1>About</h1>
      <div className={styles.paragraph}>
        The flux capacitor. You broke it. Wow, look at him go. Marty, you made
        it. No, no, George, look, it's just an act, right? Okay, so 9:00 you're
        strolling through the parking lot, you see us struggling in the car, you
        walk up, you open the door and you say, your line, George. I think we
        need a rematch. Get your meat hooks off of me. Scram, McFly. You know
        what I do in those situations? Uh, I think so. What were you doing in
        the middle of the street, a kid your age. I can't play. I'm too loud. I
        can't believe it. I'm never gonna get a chance to play in front of
        anybody. A bolt of lightning, unfortunately, you never know when or
        where it's ever gonna strike. Well, bring her along. This concerns her
        too. Uncle Jailbird Joey? Okay Doc, this is it. Well, bring her along.
        This concerns her too. Just turn around, McFly, and walk away. Are you
        deaf, McFly? Close the door and beat it. Oh Mom, there's nothing wrong
        with calling a boy. I'm sure that in 1985, plutonium is available at
        every corner drug store, but in 1955, it's a little hard to come by.
        Marty, I'm sorry, but I'm afraid you're stuck here.
      </div>
    </div>
  );
}

export default About;
