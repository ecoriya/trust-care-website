import "./Service.css";

function Services() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>

      {/* What We Provide */}
      <section className="service-section">
        <h3>What TRUST CARE Offers</h3>
        <ul>
          <li>24/7 Emergency Cardiac Care</li>
          <li>Comprehensive Heart Check-up Packages</li>
          <li>Cardiac Rehabilitation & Lifestyle Counseling</li>
          <li>Interventional Cardiology (Angioplasty, Stenting)</li>
          <li>Cardiac Surgery (Bypass, Valve Replacement)</li>
          <li>Pacemaker & Device Implantation</li>
          <li>Non-Invasive Cardiac Imaging</li>
          <li>Inpatient and Outpatient Cardiology Services</li>
        </ul>
      </section>

      {/* Available Tests */}
      <section className="service-section">
        <h3>Available Heart-Related Tests</h3>
        <ul>
          <li>ECG (Electrocardiogram)</li>
          <li>2D Echo (Echocardiography)</li>
          <li>3D Echo</li>
          <li>TMT (Treadmill Test / Stress Test)</li>
          <li>Holter Monitoring (24-48 hour ECG)</li>
          <li>Troponin I (Trop I)</li>
          <li>CK-MB Test</li>
          <li>Lipid Profile (Cholesterol & Triglycerides)</li>
          <li>HbA1c (Glycated Hemoglobin)</li>
          <li>TSH (Thyroid Stimulating Hormone)</li>
          <li>RFT (Renal Function Test)</li>
          <li>CBP (Complete Blood Picture)</li>
          <li>NT-proBNP (for Heart Failure Detection)</li>
          <li>D-Dimer (Clot risk detection)</li>
          <li>Blood Pressure Monitoring</li>
        </ul>
      </section>

      {/* Specialist Doctors */}
      <section className="service-section">
        <h3>Specialist Doctors</h3>
        <p>
          Our team of experienced cardiologists includes:
          Dr. Sanjh Sahu, Dr. Deepthi, Dr. Vishwakanth, and Dr. Krishna Reddy.
          They specialize in diagnostics, interventional cardiology, and cardiac surgery.
        </p>
      </section>

      {/* Patient Support */}
      <section className="service-section">
        <h3>Patient Support</h3>
        <p>We offer personalized care with resources like:</p>
        <ul>
          <li>Heart-Healthy Diet Plans</li>
          <li>Recovery Guidelines after Surgery or Treatment</li>
          <li>Exercise Routines for Cardiac Patients</li>
          <li>Medication Management & Adherence Tips</li>
          <li>Psychological Support for Stress Management</li>
          <li>Post-Discharge Follow-up Care</li>
        </ul>
      </section>

      {/* Unique Cardiovascular Programs */}
      <section className="service-section">
        <h3>Unique Cardiovascular Disease Prevention and Management Programs</h3>
        <p>
          Special programs are offered for patients with acute heart stroke (ACS Care program),
          acute and chronic heart failure (HF Care Program), cardiac rehabilitation services
          (post-MI and post-cardiac surgery) (Cardiac Rehab Care), and Cardiovascular Disease
          Prevention (CVD Preventive Care). The programs are run by specially trained teams of medical,
          nursing, and allied professionals (diet, exercise, behavior therapy, homecare etc).
          These teams offer services in pre-hospital, hospital, outpatient, and home settings based
          on the Care Continuum concept. The programs are professionally designed with protocols for
          guideline-based therapies to deliver the best outcomes at the least cost.
        </p>
      </section>

      {/* Remote Intensive Care Management */}
      <section className="service-section">
        <h3>Remote Intensive Care Management through e-ICCU Technology</h3>
        <p>
          Patients with many acute illnesses often reach nearest facilities where specialized expertise
          may not be immediately available. Correct treatment within the first hour of an emergency saves many lives.
          Our unique e-ICCU technology platform provides expert cardiac and critical care services round the clock
          to clinicians, ambulance networks, and hospitals of all sizes, increasing access and improving outcomes.
        </p>
      </section>

      {/* Culture of Learning */}
      <section className="service-section">
        <h3>Culture of Learning Ensures High Safety and Quality</h3>
        <p>
          The Centre offers education & training programs in Cardiovascular Nursing, Critical Care Nursing,
          Post-MBBS Fellowship in Primary Cardiology, Cardiovascular Technician training, and DNB Fellowship in Cardiology.
          Regular continuing medical and nursing education (CME and CNE) programs are conducted for general practitioners,
          specialists, postgraduates, nurses, and technicians.
        </p>
      </section>

      {/* Focus on Research */}
      <section className="service-section">
        <h3>Focus on Research</h3>
        <p>
          The Centre implements an advanced Electronic Medical Record system with a well-designed clinical database.
          Meticulous data collection and analysis enable continuous quality, safety, and cost monitoring for various cardiac conditions.
          Registries are maintained for acute coronary syndromes, heart failure, anticoagulant therapy, pacemaker & ICD devices,
          PTCA, CABG, etc. The Centre undertakes original and sponsored research on drugs and devices.
        </p>
      </section>

      {/* Clinical Audit Systems */}
      <section className="service-section">
        <h3>Clinical Audit Systems</h3>
        <p>
          These systems ensure that appropriate care is provided as per evidence-based guidelines,
          tailored to local conditions.
        </p>
      </section>

      {/* Affordable Services */}
      <section className="service-section">
        <h3>Affordable Services</h3>
        <p>
          Tariffs are designed to align with TRUST CARE’s mission of making essential cardiac care affordable.
          They are significantly lower than many hospitals providing similar quality services,
          ensuring no patient is refused essential care due to financial constraints.
        </p>
      </section>
    </div>
  );
}

export default Services;
