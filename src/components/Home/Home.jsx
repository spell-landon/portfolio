import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { gsap } from 'gsap';
// import { Power1, Back } from 'gsap/gsap-core';
// import { ScrollTrigger } from 'gsap-trial/src/ScrollTrigger';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Home(props) {
  // GSAP
  gsap.registerPlugin(ScrollTrigger);
  // grab elements by their references
  const hero = useRef(null);
  const projectsEl = useRef(null);
  const aboutEl = useRef(null);
  const contactEl = useRef(null);
  const resumeEl = useRef(null);
  const hrEl1 = useRef(null);
  const hrEl2 = useRef(null);
  const hrEl3 = useRef(null);

  useEffect(() => {

    gsap.from(hero.current, {
      opacity: 0,
      duration: 1.2,
      ease: 'power1.inOut',
    });
    gsap.to(
      [
        projectsEl.current,
        aboutEl.current,
        contactEl.current,
        resumeEl.current,
      ],
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power1.inOut',
      }
    );
    gsap.to([hrEl1.current, hrEl2.current, hrEl3.current], {
      opacity: 1,
      duration: 1.5,
      stagger: 0,
      ease: 'power1.inOut',
    });
  }, []);
  
  // END GSAP

  return (
    <div className={styles.main}>
      <section className={styles.textArea}>
        <h1 ref={hero}>
          Landon Spell<span>.</span>
        </h1>
        <ul className={styles.ulEl}>
          <Link smooth to='/#projects' ref={projectsEl}>
            <li>Projects</li>
          </Link>
          <hr ref={hrEl1} />
          <Link smooth to='/#about' ref={aboutEl}>
            <li>About</li>
          </Link>
          <hr ref={hrEl2} />
          <Link smooth to='/#contact' ref={contactEl}>
            <li>Contact</li>
          </Link>
          <hr ref={hrEl3} />
          <Link smooth to='/about' ref={resumeEl}>
            <li>Resume</li>
          </Link>
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
