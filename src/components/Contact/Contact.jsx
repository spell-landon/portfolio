import React from 'react';
import styles from './Contact.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

function Contact(props) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContainer}>
        <h1>Contact</h1>
        <form>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' className={styles.input} />
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' className={styles.input} />
          <label htmlFor='phone'>Phone Number</label>
          <input type='text' id='phone' className={styles.input} />
          <label htmlFor='message'>Message</label>
          <textarea
            type='text'
            id='message'
            // className={styles.input}
            rows='8'
            cols='50'></textarea>
          <button type='submit' value='Send' className={styles.submit}>
            Send
          </button>
        </form>
        <div className={styles.additional}>
          <p>Or, you can find me here:</p>
          <ul>
            <li>
              <a
                className={styles.icon}
                href='https://www.linkedin.com/in/landon-spell/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className={styles.icon}
                href='https://github.com/spell-landon'
                target='_blank'
                rel='noreferrer'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className={styles.icon}
                href='mailto: spell.landon@gmail.com?subject=I checked out your portfolio...'
                target='_blank'
                rel='noreferrer'>
                <MdAlternateEmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
