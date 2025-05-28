import { useNavigate } from 'react-router-dom';
import cardiologistImg from '../../assets/Cardiologist.png';


//import CardiologyInfo from './CardiologyInfo';
import AboutUs from './AboutUS';
import Footer from './Footer';
import './Home.css'; // or whatever the correct path is


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };

  const styles = {
  hero: {
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
  
    textAlign: 'center'
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',  // changed from lightSkyBlue to dark gray
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#555',  // changed from lightSkyBlue to medium gray
  },
  button: {
    backgroundColor: '#87CEFA',  // keep lightSkyBlue
    color: '#fff',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  subtext: {
    marginTop: '15px',
    color: '#333',  // neutral color, remove lightSkyBlue
    fontSize: '1.1rem',
  },
  servicesSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff'
  },
  sectionTitle: {
    fontSize: '3rem',
    marginBottom: '15px',
    textAlign: 'center',
    color: '#222',  // changed to dark color
  },
  sectionText: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.4rem',
    color: '#444',  // changed to medium-dark
  },
  serviceList: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '2',
    fontSize: '1.2rem',
    color: '#444',  // neutral gray instead of sky blue
  },
  whyChooseSection: {
    padding: '40px 20px',
    backgroundColor: '#f0f0f0'
  },
  expertsSection: {
    padding: '40px 20px'
  },
  doctorGrid: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  doctorCard: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333',  // changed from sky blue to dark gray
  },
  testimonialSection: {
    backgroundColor: '#e6f7ff',
    padding: '40px 20px',
    textAlign: 'center'
  },
  testimonial: {
    fontStyle: 'italic',
    margin: '20px auto',
    maxWidth: '600px',
    color: '#333',  // neutral gray
    fontSize: '1.2rem',
  }
  


  };

  return (
  <div>
    {/* Hero Section */}
    <section style={styles.hero}>
      <img src={cardiologistImg} alt="Trust Care cardiologist team" style={styles.image} />

      <h2 style={styles.heading}>Your Heart Deserves Expert Care</h2>
      
      <p style={styles.text}>
        At <strong>TRUST CARE</strong>, our Cardiology Department blends decades of experience with cutting-edge technology to keep your heart healthy.
      </p>
      <button style={styles.button} onClick={handleClick}>Book an Appointment Now</button>
      <p style={styles.subtext}>Available 24/7 for emergencies. Walk-ins welcome.</p>
    </section>

    
   

    {/* Meet the Experts */}
    <section style={styles.expertsSection}>
      <h2 style={styles.sectionTitle}>Meet Our Cardiology Experts</h2>
      <p style={styles.sectionText}>Our experienced and compassionate cardiologists are dedicated to keeping your heart healthy.</p>
      <div style={styles.doctorGrid}>
        <div style={styles.doctorCard}>
          <h3>Dr. N Krishna Reddy</h3>
          <p>MD,DM</p>
          <p>Consultant,Cardiologist</p>
        </div>
        <div style={styles.doctorCard}>
          <h3>Dr. Sanjib Sahu</h3>
          <p>MD,(Gen),Cardiology FACC USA,FESC</p>
          <p>Consultant Iterventional Cardiologist</p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section style={styles.testimonialSection}>
      <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
      <blockquote style={styles.testimonial}>
        "TRUST CARE gave me a second chance at life. The doctors were caring, the treatment was top-notch, and I felt safe every step of the way."
        <br /><strong>- Ramesh S., Heart Surgery Patient</strong>
      </blockquote>
      <blockquote style={styles.testimonial}>
        "The 24/7 emergency team saved my father's life. Forever grateful!"
        <br /><strong>- Anita D., Daughter of Patient</strong>
      </blockquote>
    </section>

    {/* About Us */}
    <AboutUs />

    

    {/* Footer */}
    <Footer />
  </div>
);

}
export default Home;
