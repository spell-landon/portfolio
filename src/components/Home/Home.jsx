// dependencies
import React, { useRef, useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

// components
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// stylesheet
import styles from './Home.module.css';

import projectData from '../../data.json';

function Home(props) {
  const [data, setData] = useState(projectData);

  return (
    <div className={styles.main}>
      <section className={styles.textArea}>
        <Fade bottom>
          <h1>
            Landon Spell<span>.</span>
          </h1>
        </Fade>
        <Fade bottom cascade>
          <ul className={styles.ulEl}>
            <li>
              <Link
                activeClass='active'
                className='projects'
                to='projects'
                spy={true}
                smooth={true}
                duration={600}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                className='about'
                to='about'
                spy={true}
                smooth={true}
                duration={600}>
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                className='contact'
                to='contact'
                spy={true}
                smooth={true}
                duration={600}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href='https://docs.google.com/document/d/1uMVq5JiOIEi_6B2-u-7LSNKSk9APIHIr3sUP7jtlLnA/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </Fade>
      </section>
      {/* Scroll Elements / Components */}
      <Element name='projects'>
        <Projects data={data} />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
