import styles from '../styles/ContactCode.module.css';

const AboutPage = () => {
  return (
    <>
      <h1>About Joshika</h1>
      <div className={styles.code}>
      <p className={styles.comment} >
      /* A self-motivated and active tech enthusiast that enjoys experimenting with 
        </p>
        <p className={styles.comment} >
        new technologies, creating new things, and applying her technological skills 
        </p>
        <p className={styles.comment} >
        to address real-world problems. */
        </p>
      <p className={styles.line}>
        <span className={styles.className}>.about</span> &#123;
      </p>
      
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;major:{' '}
          Computer Science and Engineering
       
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;undergraduate:{' '}
        
          Bachelor's of Technology
       
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;university:{' '}
       Vellore Institute of Technology (Batch of 2023)
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;skillsAndInterests :{' '}
       MERN Stack Development, UI/UX, Data Science
        ;
      </p>
      <p className={styles.line}>&#125;</p>
      </div>
    </>
    
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
