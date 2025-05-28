import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home';
import Doctors from "./components/pages/Doctors";
import BookAppointment from "./components/pages/BookAppointment";
import Contact from './components/pages/contact';
import CardiologyInfo from './components/pages/CardiologyInfo';
import PatientResources from './components/pages/Patientresource';
import AvailableTests from './components/pages/AvaiableTests';
import Services from './components/pages/Service';
import AppointmentsDashboard from './components/pages/AppointmentsDashboard';
import AboutUS from "./components/pages/AboutUS";
import HCSApp from "./components/pages/HCSApp"; 
 // Only if it's a named export
 // adjust path as needed



// ✅ Newly added
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <header className="navbar">
        
  <h1> <img src="/logo.png" alt="Trust Care Logo" /></h1>
<nav> <ul> <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>  {/* Fixed here */}
               <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/hcs-app">HCS App</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="/available-tests">Available Tests</Link></li>
              <li><Link to="/cardiology">Cardiology Info</Link></li>
              <li><Link to="/patient-resources">Patient Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/appointments-dashboard">Appointments Dashboard</Link></li> {/* ✅ New link */}
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />  {/* Fixed here */}

          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/hcs-app" element={<HCSApp />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/available-tests" element={<AvailableTests />} />
          <Route path="/cardiology" element={<CardiologyInfo />} />
          <Route path="/patient-resources" element={<PatientResources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointments-dashboard" element={<AppointmentsDashboard />} /> {/* ✅ New route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>Contact: trustcare@example.com | Phone: 123-456-7890</p>
          <p>© 2025 TRUST CARE Hospital</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
