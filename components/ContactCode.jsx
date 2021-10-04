import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://joshika.vercel.app" target="_blank" rel="noopener">
          joshika.vercel.app
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:joshika.ganne@gmail.com"
          target="_blank"
          rel="noopener"
        >
          joshika.ganne@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/joshikag" target="_blank" rel="noopener">
          joshikag
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/joshika-ganne-2a70951a0/"
          target="_blank"
          rel="noopener"
        >
          joshika-ganne
        </a>
        ;
      </p>
     
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
