import React from 'react';
import styles from './Home.module.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Home(props) {
  return (
    <div className={styles.main}>
      <section className={styles.textArea}>
        <h1>
          Landon Spell<span>.</span>
        </h1>
        <ul className={styles.ulEl}>
          <Link smooth to='/#projects'>
            <li>Projects</li>
          </Link>
          <hr />
          <Link smooth to='/#about'>
            <li>About</li>
          </Link>
          <hr />
          <Link to='/#contact'>
            <li>Contact</li>
          </Link>
          <hr />
          {/* <Link to='/about'> */}
          <li>Resume</li>
          {/* </Link> */}
        </ul>
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
