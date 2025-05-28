// src/components/Footer.js


const footerStyle = {
  backgroundColor: '#f8f8f8',
  padding: '40px 20px',
  borderTop: '1px solid #ccc',
  marginTop: '60px',
  fontSize: '1rem',
  color: '#333',
};

const sectionTitle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginBottom: '10px',
};

const linkStyle = {
  display: 'block',
  marginBottom: '6px',
  color: '#007BFF',
  textDecoration: 'none',
};

const contactInfo = {
  marginTop: '20px',
  lineHeight: '1.8',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <div style={sectionTitle}>Navigation</div>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/services" style={linkStyle}>Services</a>
          <a href="/infrastructure" style={linkStyle}>Infrastructure</a>
          <a href="/appointment" style={linkStyle}>Appointment</a>
          <a href="/hcs-apps" style={linkStyle}>HCS Apps</a>
          <a href="/gallery" style={linkStyle}>Gallery</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </div>

        <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <div style={sectionTitle}>Contact Info</div>
          <div style={contactInfo}>
            <strong>Address:</strong><br />
            Durgabai Deshmukh Hospital, Andhra Mahila Sabha,<br />
            Vidyanagar, Hyderabad - 500044<br />
            <br />
            <strong>Phone:</strong> +91-7995003299, +91-9848033230<br />
            <strong>Email:</strong> info@healthcareservices.co.in
          </div>
        </div>

        <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <div style={sectionTitle}>Compliance</div>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
          <p style={{ marginTop: '10px' }}>
            © 2021 All rights reserved.<br />
            Design by <strong>Statin Technologies</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
