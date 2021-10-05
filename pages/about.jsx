import styles from '../styles/ContactPage.module.css';
import GitHubCalendar from 'react-github-calendar';


const AboutPage = () => {

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };
  return (
  
  <>
       
          {/* <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          /> */}
          <div >
            <div>
          <h3 >Hi! This is Joshika Ganne</h3>
        
        
          <p >
          A self-motivated and active tech enthusiast that enjoys experimenting with new technologies, creating new things, and applying her technological skills to address real-world problems.
          </p>
    
        
          <h3 >
         Education:
          </h3>
          <p >
            Vellore Institute of Technology (Batch of 2023)
          </p>
          <p > B.Tech- Computer Science and Engineering</p>
     
      
          <h3 >Skills and Interests:</h3>
          <ul >
            <li>Web Development</li>
            <li>React.js</li>
            <li>Data Structures and Algorithms</li>
            <li>UI/UX</li>
            <li>Data Science</li>
          </ul>
      
          <a className={styles.underline} target="_blank"href="https://drive.google.com/file/d/1Ah6YaYMrE9NtDLIKnRgpCBqzaU0MNK_3/view?usp=sharing" >
          <h3>Go to Resume</h3>
          </a>
       
     <br></br>
     
      <a className={styles.underline} target="_blank"href="https://github.com/joshikag" >
        <h3>View Github</h3>
        </a>
        <div >
        <GitHubCalendar
          username='joshikag'
          theme={theme}
          hideColorLegend
        />
        </div>
        
       
          </div>
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


