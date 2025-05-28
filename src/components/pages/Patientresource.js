//import React from 'react';
import './Patientresorces.css';

function PatientResources() {
  return (
    <div className="patient-resources-container">
      {/* Sticky Bar */}
      <div className="sticky-nav">
        <a href="#education">Education</a>
        <a href="#forms">Forms</a>
        <a href="#appointment">Appointment</a>
        <a href="#support">Support</a>
        <a href="#insurance">Insurance</a>
        <a href="#contact">Contact</a>
      </div>

      <h1 className="section-title">Patient Resources</h1>

      <section id="education" className="resource-section">
        <h2>Heart Disease Information</h2>
        <ul>
          <li><button className="link-style" onClick={() => alert("Understanding Heart Disease content coming soon.")}>Understanding Heart Disease</button></li>
          <li><button className="link-style" onClick={() => alert("Risk Factors and Prevention content coming soon.")}>Risk Factors and Prevention</button></li>
          <li><button className="link-style" onClick={() => alert("Heart Surgery Options content coming soon.")}>Heart Surgery Options</button></li>
        </ul>
      </section>

      <section id="forms" className="resource-section">
        <h2>Important Forms</h2>
        <ul>
          <li><button className="link-style" onClick={() => alert("New Patient Intake Form download coming soon.")}>New Patient Intake Form</button></li>
          <li><button className="link-style" onClick={() => alert("Medical History Form download coming soon.")}>Medical History Form</button></li>
          <li><button className="link-style" onClick={() => alert("Consent for Treatment form coming soon.")}>Consent for Treatment</button></li>
        </ul>
      </section>

      <section id="appointment" className="resource-section">
        <h2>Schedule an Appointment</h2>
        <p>Book your appointment online or contact us via phone.</p>
        <a href="/doctors" className="appointment-button">Book Appointment</a>
      </section>

      <section id="support" className="resource-section">
        <h2>Support Groups & Counseling</h2>
        <p>Join our support groups for heart patients and gain strength from community support.</p>
      </section>

      <section id="insurance" className="resource-section">
        <h2>Insurance & Payment</h2>
        <p>We accept various insurance plans. See a list of accepted insurances and payment options.</p>
      </section>

      <section id="contact" className="resource-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, please reach out to our team.</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: trustcare@hospital.org</p>
      </section>
    </div>
  );
}

export default PatientResources;
