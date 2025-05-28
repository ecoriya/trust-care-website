


import "./HCSApp.css";

function HCSApp() {
  return (
    <div className="hcs-app-section">
      <h2>HCS Application Overview</h2>

      {/* Disease Management Programs */}
      <section className="hcs-section">
        <h3>Disease Management Programs</h3>
        <ul>
          <li><a href="https://pci-registry.com/" target="_blank" rel="noopener noreferrer">PCI</a></li>
          <li><a href="http://mis.pci-registry.com/" target="_blank" rel="noopener noreferrer">MIS-PCI</a></li>
          <li><a href="http://cvd.healthcareservices.co.in/" target="_blank" rel="noopener noreferrer">PREVENT - CVD</a></li>
          <li><a href="https://stemi.healthcareservices.co.in/" target="_blank" rel="noopener noreferrer">STEMI CARE</a></li>
          <li><a href="http://ww3.hfprogram.org/?subid1=a1f6eefc-321d-11f0-b054-6ec1b00031a9" target="_blank" rel="noopener noreferrer">HF CARE</a></li>
          <li><a href="https://www.ckd.healthcareservices.co.in/" target="_blank" rel="noopener noreferrer">CKD</a></li>
        </ul>
      </section>

      {/* Tele Medicine */}
      <section className="hcs-section">
        <h3>Tele Medicine</h3>
        <ul>
          <li><a href="http://teleecg.healthcareservices.co.in/" target="_blank" rel="noopener noreferrer">TELE-ECG</a></li>
          <li><a href="https://eicu.healthcareservices.co.in/" target="_blank" rel="noopener noreferrer">eICU</a></li>
          <li><a href="http://202.143.96.52/iWeb/Login.aspx?ReturnUrl=%2fiWeb%2fPages%2fHome.aspx" target="_blank" rel="noopener noreferrer">PACS</a></li>
          <li>Patient Portal</li>
          <li>Homecare</li>
        </ul>
      </section>

      {/* HIS */}
      <section className="hcs-section">
        <h3>HIS</h3>
        <p>Hospital Information System</p>
        <ul>
          <li>i-Clinic+</li>
        </ul>
      </section>

      {/* H-Apps */}
      <section className="hcs-section">
        <h3>H-Apps</h3>
        <ul>
          <li><a href="https://www.karminn.com/my-ezypro-login" target="_blank" rel="noopener noreferrer">QUALITY</a></li>
          <li>MIS</li>
          <li>EMR</li>
          <li><a href="http://localhost:3002/appointment" target="_blank" rel="noopener noreferrer">Doctor Appointment</a></li>
          <li>HCS Mail</li>
          <li>KMS</li>
        </ul>
      </section>
    </div>
  );
}

export default HCSApp;
