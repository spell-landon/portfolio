import React from 'react';
import styles from './Contact.module.css';

function Contact(props) {
  return (
    <div className={styles.contactContainer}>
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
          className={styles.input}
          rows='4'
          cols='50'></textarea>
        <button type='submit' value='Send' className={styles.submit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
