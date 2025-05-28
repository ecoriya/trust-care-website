import { useNavigate } from "react-router-dom";
import './Doctors.css'; // Optional if separating styles

function Doctors() {
  const navigate = useNavigate();

  const doctors = [
    {
      image: '/pages/Christian.jpg',
      name: "Dr. Sanjh Sahu",
      surgeries: 200,
      achievements: "Award-winning Cardiologist",
    },
    {
      image: '/pages/debora.jpg',
      name: "Dr. Deepthi",
      surgeries: 300,
      achievements: "Heart Specialist with 20+ years experience",
    },
    {
      image: '/pages/male.jpg',
      name: "Dr. Vishwakanth",
      surgeries: 300,
      achievements: "Senior Cardiothoracic Surgeon",
    },
    {
      image: '/pages/jesus1.jpg',
      name: "Dr. Krishna Reddy",
      surgeries: 300,
      achievements: "Renowned Heart Specialist & Researcher",
    },
  ];

  const handleAppointmentClick = (doctorName) => {
    navigate("/appointment", { state: { preferredDoctor: doctorName } });
  };

  return (
    <div className="doctors-page" style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Doctors</h2>
      <div className="doctor-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card" style={{
            width: '250px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <img
              src={doc.image}
              alt={doc.name}
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
            />
            <h3 style={{ color: '#2c3e50' }}>{doc.name}</h3>
            <p><strong>Surgeries:</strong> {doc.surgeries}</p>
            <p><strong>Achievements:</strong> {doc.achievements}</p>
            <button
              onClick={() => handleAppointmentClick(doc.name)}
              style={{
                marginTop: '12px',
                backgroundColor: '#3498db',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
