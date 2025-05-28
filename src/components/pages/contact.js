function Contact() {
  return (
    <div className="contact-page" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      {/* Navigation Links */}
      <nav style={{ marginBottom: '2rem' }}>
        <h2>Navigation</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['About', 'Services', 'Infrastructure', 'Appointment', 'HCS Apps', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} style={{ textDecoration: 'none', color: '#004080', fontWeight: 'bold' }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Info */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Contact Info</h2>
        <p><strong>Address:</strong> Durgabai Deshmukh Hospital, Andhra Mahila Sabha, Vidyanagar, Hyderabad - 500044</p>
        <p><strong>Phone:</strong> +91-7995003299, +91-9848033230</p>
        <p><strong>Email:</strong> <a href="mailto:info@healthcareservices.co.in" style={{ color: '#004080' }}>info@healthcareservices.co.in</a></p>
      </section>

      {/* General Assistance */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Need Assistance?</h2>
        <p>For any assistance, call us at: <strong>98765-43210</strong></p>
      </section>

      {/* Compliance and Privacy */}
      <section>
        <h2>Compliance & Privacy</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><a href="#compliance" style={{ color: '#004080', textDecoration: 'none' }}>Compliance</a></li>
          <li><a href="#privacypolicy" style={{ color: '#004080', textDecoration: 'none' }}>Privacy Policy</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
