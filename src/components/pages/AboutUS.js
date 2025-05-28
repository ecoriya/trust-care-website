import doctorImage from '../../assets/krishnareddy sir.jpg';
// Adjust the path based on your project structure

const AboutUS= () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>🏥 Welcome to Care Cardiac Center</h2>
      <div style={styles.content}>
        <img src={doctorImage} alt="Dr. N. Krishna Reddy" style={styles.image} />
        <div style={styles.text}>
          <p>
            <strong>The Legacy:</strong> Durgabhai Deshmukh Hospital was the pioneer in modern cardiac services.
            It holds the distinction of performing the first open-heart surgery in the combined state of Andhra Pradesh.
            The hospital is also highly regarded for its education and training programs.
          </p>
          <p>
            <strong>Medical Ethics-driven, Experienced Professional Teams:</strong> Comprehensive cardiac services have been
            fully recommissioned since 1st January 2018, led by <strong>Dr. N. Krishna Reddy</strong>, Senior Cardiologist and
            Co-founder of the Care Group of Hospitals.
          </p>
          <p>
            The Cardiology & Critical Care team includes:
            <ul>
              <li>4 PGDCC Registrars</li>
              <li>4 Critical Care Registrars</li>
              <li>2 Full-Time Cardiologists</li>
              <li>6 Visiting Cardiologists (including Pacing & Electrophysiology Specialists)</li>
              <li>Pediatric & Heart Failure Specialists</li>
            </ul>
            The Cardiac Surgery team includes:
            <ul>
              <li>1 Full-Time Cardiac Surgeon</li>
              <li>3 Visiting Surgeons (expertise in pediatric, coronary, valvular, and aortic procedures)</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f0f4f8',
    backgroundImage: "url('service1.jpg')",
     backgroundPosition: 'center center',     
    backgroundRepeat: 'no-repeat',
    
  },
  heading: {
    fontSize: '50px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#003366',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  image: {
    maxWidth: '300px',
    width: '200%',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  text: {
    flex: 1,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
  },
};

export default AboutUS;
